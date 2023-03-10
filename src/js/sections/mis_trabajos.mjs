import {
    createSpacer,
    createRow,
    openModal,
    findInObject
} from '../functions.mjs';

import * as DATA from '../data.mjs';

import {
    IS_MOBILE
} from '../web_build.mjs';

export function populatePorfolio() {
    const porfolio_bloque_interior = document.getElementById('porfolio_bloque_interior');
    
    buildPorfolio(DATA.CATEGORIAS_PORFOLIO.DISENO);

    if(!document.getElementById('botones_mas_trabajos')){
        const botones_mas_trabajos = document.createElement('footer');
        botones_mas_trabajos.id = 'botones_mas_trabajos';
    
        //Porfolio footer with links
        DATA.URLS_PORFOLIO.forEach(porfolio_element => {
            let boton_mas_trabajos = document.createElement('a');
            boton_mas_trabajos.href = porfolio_element.url;
            boton_mas_trabajos.target = '_blank';
            boton_mas_trabajos.title = porfolio_element.title;
            boton_mas_trabajos.classList.add('boton_gris', 'shadow_standard', 'fa-2xl');
    
            let icon = document.createElement('i');
            icon.classList += ' ' + porfolio_element.icon;
            boton_mas_trabajos.appendChild(icon);
    
    
            botones_mas_trabajos.appendChild(createSpacer());
            botones_mas_trabajos.appendChild(boton_mas_trabajos);
        });
        botones_mas_trabajos.appendChild(createSpacer());
        porfolio_bloque_interior.appendChild(botones_mas_trabajos);
    }

}


function buildPorfolio(category) {
    //Builds porfolio section with porfolio jobs from DATA
    //sets language
    const current_language = window.currentLanguage[0];

    let category_text = DATA.TEXTOS[current_language].CATEGORIAS_PORFOLIO[[Object.keys(DATA.CATEGORIAS_PORFOLIO)[category -1]]];

    //deletes everything
    const porfolio_bloque_interior = document.getElementById('porfolio_bloque_interior');
    const bloque_trabajos = document.getElementById('bloque_trabajos');
    bloque_trabajos.innerHTML = '';

    const subtitle = document.getElementById('porfolio_bloque_interior_subtitle');
    subtitle.innerHTML = category_text;
    subtitle.classList.add('text_shadow_standard');

    const bloque_trabajos_container = document.createElement('div');
    bloque_trabajos_container.id = 'bloque_trabajos_container';

    let row = createRow();

    let count = 0;
    DATA.TRABAJOS_PORFOLIO.filter(trabajo => (trabajo.priority == 1 && trabajo.category == category)).forEach(trabajo => {
        createPorfolioCard(row, trabajo);

        if (count == 2 || IS_MOBILE) {
            //Hago salto de l??nea
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

        if (count == 2 || IS_MOBILE) {
            //Hago salto de l??nea
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

    const next_prev_cat = getNextPrevCat(category);

    if (document.querySelector('#porfolio_bloque_interior .porfolio_prev_button')) {
        document.querySelector('#porfolio_bloque_interior .porfolio_prev_button').remove();
    }
    if (document.querySelector('#porfolio_bloque_interior .porfolio_next_button')) {
        document.querySelector('#porfolio_bloque_interior .porfolio_next_button').remove();
    }

    let prev = document.createElement('a');
    prev.addEventListener('click', function () {
        buildPorfolio(next_prev_cat[0]);
    });
    prev.classList.add('porfolio_prev_button');
    const icon_prev = document.createElement('i');
    icon_prev.classList = 'fa-solid fa-chevron-right';
    prev.appendChild(icon_prev);
    porfolio_bloque_interior.appendChild(prev);

    const next = document.createElement('a');
    next.addEventListener('click', function () {
        buildPorfolio(next_prev_cat[1]);
    });
    next.classList.add('porfolio_next_button');
    const icon_next = document.createElement('i');
    icon_next.classList = 'fa-solid fa-chevron-left';
    next.appendChild(icon_next);
    porfolio_bloque_interior.appendChild(next);
}




function createPorfolioCard(page_section, porfolio_job) {
    //Creates dom element with all provided in the parameter
    page_section.appendChild(createSpacer(1));

    const card_trabajo = document.createElement('a');
    card_trabajo.classList.add('card_trabajo');
    card_trabajo.target = '_blank';
    card_trabajo.title = porfolio_job.title;
    card_trabajo.dataset.trabajo_id = porfolio_job.id;
    card_trabajo.href = porfolio_job.link;

    const img_trabajo = document.createElement('img');
    img_trabajo.src = porfolio_job.img;
    img_trabajo.title = porfolio_job.title;
    img_trabajo.alt = porfolio_job.title;
    img_trabajo.classList.add('img_trabajo', 'shadow_elevated');
    card_trabajo.appendChild(img_trabajo);


    page_section.appendChild(card_trabajo);
}


function getNextPrevCat(category = DATA.CATEGORIAS_PORFOLIO.DISENO) {
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