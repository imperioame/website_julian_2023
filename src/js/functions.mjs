import * as DATA from './data.mjs';


export function createSpacer(size = 1) {
    //Creates a Flebox spacer with the asigned grow value (check styles.css)
    let spacer = document.createElement('div');
    if (size > 4) {
        size = 4;
    }
    spacer.classList.add(`spacer-${size}`);
    spacer.innerHTML = ' ';
    return spacer;
}

export function createRow() {
    let row = document.createElement('div');
    row.classList.add('flex_row');

    return row;
}

export function findInObject(object, element){
    // Receives an object and tries to find element in it.
    // Returns index of object, Object transformed into an array
    // Meant for Diccionaries

    const array = Object.entries(object);

    const objectElement = array.find(subArray => subArray[1] == element);
    const index = array.indexOf(objectElement);

    return [index,array,objectElement];
}


export function getNextPrevCat(category = DATA.CATEGORIAS_PORFOLIO.DISENO) {
    //Giving a Porfolio Category, returns next and previous categories

    const currentIndex = findInObject(DATA.CATEGORIAS_PORFOLIO, category)[0];
    const categoryArray = findInObject(DATA.CATEGORIAS_PORFOLIO, category)[1]

    let nextIndex = currentIndex + 1;
    if (nextIndex == categoryArray.length) {
        nextIndex = 0
    }
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = categoryArray.length - 1;
    }

    let prevItem = categoryArray[prevIndex][1];
    let nextItem = categoryArray[nextIndex][1];

    return [prevItem, nextItem];
}

export function buildPorfolio(sectionElement_id, category) {
    //Builds porfolio section with porfolio jobs from DATA
    //deletes everything first
    let sectionElement = document.getElementById('porfolio_bloque_interior');
    sectionElement.innerHTML = '';


    subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = category;
    sectionElement.appendChild(subtitle);


    const bloque_trabajos = document.createElement('article');
    bloque_trabajos.id = 'bloque_trabajos';
    const bloque_trabajos_container = document.createElement('div');
    bloque_trabajos_container.id = 'bloque_trabajos_container';

    let row = createRow();

    let count = 0;
    DATA.TRABAJOS_PORFOLIO.filter(trabajo => (trabajo.priority == 1 && trabajo.category == category)).forEach(trabajo => {
        createPorfolioCard(row, trabajo);

        if (count == 2) {
            //Hago salto de línea
            row.appendChild(createSpacer(1));
            bloque_trabajos_container.appendChild(row);
            bloque_trabajos_container.appendChild(createSpacer(1));
            count = 0;
            row = createRow();
        } else {
            count++;
        }
    });

    DATA.TRABAJOS_PORFOLIO.filter(trabajo => (trabajo.priority > 1 && trabajo.category == category)).forEach(trabajo => {
        createPorfolioCard(row, trabajo);

        if (count == 2) {
            //Hago salto de línea
            row.appendChild(createSpacer(1));
            bloque_trabajos_container.appendChild(row);
            bloque_trabajos_container.appendChild(createSpacer(1));
            count = 0;
            row = createRow();
        } else {
            count++;
        }
    });
    if (count != 0) {
        row.appendChild(createSpacer(1));
        bloque_trabajos_container.appendChild(row);
    }
    bloque_trabajos.appendChild(bloque_trabajos_container);
    sectionElement.appendChild(bloque_trabajos);


    const overlay_gradiente = document.createElement('div');
    overlay_gradiente.id = 'overlay_gradiente';
    sectionElement.appendChild(overlay_gradiente);

    const next_prev_cat = getNextPrevCat(category);

    const prev = document.createElement('a');
    prev.addEventListener('click', function () {
        buildPorfolio(sectionElement, next_prev_cat[0]);
    });
    prev.classList.add('porfolio_prev_button');
    const icon_prev = document.createElement('i');
    icon_prev.classList = 'fa-solid fa-chevron-right';
    prev.appendChild(icon_prev);
    sectionElement.appendChild(prev);

    const next = document.createElement('a');
    next.addEventListener('click', function () {
        buildPorfolio(sectionElement, next_prev_cat[1]);
    });
    next.classList.add('porfolio_next_button');
    const icon_next = document.createElement('i');
    icon_next.classList = 'fa-solid fa-chevron-left';
    next.appendChild(icon_next);
    sectionElement.appendChild(next);
}


export function createPorfolioCard(page_section, porfolio_job) {
    //Creates dom element with all provided in the parameter
    page_section.appendChild(createSpacer(1));

    const card_trabajo = document.createElement('a');
    card_trabajo.classList.add('card_trabajo');
    card_trabajo.target = '_blank';
    card_trabajo.title = porfolio_job.title;
    card_trabajo.dataset.trabajo_id = porfolio_job.id;
    if (porfolio_job.source == 'behance') {
        card_trabajo.href = porfolio_job.link;

    } else {
        card_trabajo.href = `#seccion_mis_trabajos?porfolio_id=${porfolio_job.id}`;
        card_trabajo.addEventListener('click', openModal);
    }

    const img_trabajo = document.createElement('img');
    img_trabajo.src = porfolio_job.img;
    img_trabajo.title = porfolio_job.title;
    img_trabajo.alt = porfolio_job.title;
    img_trabajo.classList.add('img_trabajo');
    card_trabajo.appendChild(img_trabajo);


    page_section.appendChild(card_trabajo);
}


export function openModal(e) {
    const modal_overlay = document.createElement('div');
    modal_overlay.id = 'modal_overlay';

    const modal = document.createElement('div');
    modal.id = 'modal';

    const iframe = document.createElement('iframe');

    console.log(e.target.parentElement.dataset.trabajo_id);

    let trabajo = DATA.TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);
    iframe.src = trabajo.link;

    modal.appendChild(iframe);

    modal_overlay.appendChild(modal);
    document.body.appendChild(modal_overlay);
}


export function buildContactForm(page_section, array_inputs = ['nombre', 'mail', 'mensaje']) {
    array_inputs.forEach(value => {
        const label = document.createElement('label');
        label.innerHTML = value;
        const input = document.createElement('input');
        input.type = findInObject(DATA.FORM_TYPES, value)[2];
        if (value == 'nombre'){
            input.placeholder = 'Juan';
        }else if (value == 'mail'){
            input.placeholder = 'juan@correo.com.ar';
        }else if (value == 'mensaje'){
            input.placeholder = 'Vi tu perfil y tengo una idea de...';
        }


        page_section.appendChild(label);
        page_section.appendChild(input);
    });

    const submit_button = document.createElement('button');
    submit_button.type = 'submit';
    submit_button.id = 'submit_button';
    submit_button.innerHTML = 'Enviar';

}