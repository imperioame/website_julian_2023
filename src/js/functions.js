function createSpacer(size = 1) {
    //Creates a Flebox spacer with the asigned grow value (check styles.css)
    let spacer = document.createElement('div');
    if (size > 4) {
        size = 4;
    }
    spacer.classList.add(`spacer-${size}`);
    spacer.innerHTML = ' ';
    return spacer;
}

function createRow() {
    let row = document.createElement('div');
    row.classList.add('flex_row');

    return row;
}

function getNextPrevCat(category = CATEGORIAS_PORFOLIO.DISENO) {
    //Giving a Porfolio Category, returns next and previous categories

    const categoryArray = Object.entries(CATEGORIAS_PORFOLIO);

    const objectCategory = categoryArray.find(subArray => subArray[1] == category);
    const currentIndex = categoryArray.indexOf(objectCategory);

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

function buildPorfolio(sectionElement_id, category) {
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
    console.log(category);
    TRABAJOS_PORFOLIO.filter(trabajo => (trabajo.priority == 1 && trabajo.category == category)).forEach(trabajo => {
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

    TRABAJOS_PORFOLIO.filter(trabajo => (trabajo.priority > 1 && trabajo.category == category)).forEach(trabajo => {
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


function createPorfolioCard(page_section, porfolio_job) {
    //Creates dom element with all provided in the parameter

    page_section.appendChild(createSpacer(1));

    const card_trabajo = document.createElement('a');
    card_trabajo.classList.add('card_trabajo');
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


function openModal(e) {
    const modal_overlay = document.createElement('div');
    modal_overlay.id = 'modal_overlay';

    const modal = document.createElement('div');
    modal.id = 'modal';

    const iframe = document.createElement('iframe');

    console.log(e.target.parentElement.dataset.trabajo_id);

    let trabajo = TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);
    iframe.src = trabajo.link;

    modal.appendChild(iframe);

    modal_overlay.appendChild(modal);
    document.body.appendChild(modal_overlay);
}