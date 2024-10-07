import * as DATA from './data.mjs';
import {
    TEXTOS,
    LANGUAGES,
} from './data.mjs';


export function getLanguageFromURL(e) {
    let idioma_en_url = e.target.URL.split('#')[1];
    if (idioma_en_url) {
        return idioma_en_url;
    } else {
        return 'es';
    }
}

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

export function findInObject(object, element) {
    // Receives an object and tries to find element in it.
    // Returns index of object, Object transformed into an array
    // Meant for Diccionaries

    const array = Object.entries(object);

    const objectElement = array.find(subArray => subArray[1] == element);
    const index = array.indexOf(objectElement);

    return [index, array, objectElement];
}

function closeModal(e){
    if(e.target.id != 'modal_overlay' && e.target.id != 'close_modal' && e.target.id != 'close_modal_icon' && e.target.id != 'modal_link') return;
    document.getElementById('modal_overlay').remove();
}

export function openModal(e) {
    //This function manages an UI modal
    const modal_overlay = document.createElement('div');
    modal_overlay.id = 'modal_overlay';
    modal_overlay.addEventListener('click', closeModal);

    const modal = document.createElement('section');
    modal.id = 'modal';

    //Debería estar chequeando que el contenido sea de porfolio para este modal.
    const trabajo = DATA.TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);

    const title = trabajo.title;
    const img = trabajo.img;
    const keywords = window.currentLanguage == LANGUAGES.ESPANOL ? trabajo.keywords.es : trabajo.keywords.en;
    const tools = trabajo.tools;
    const description = trabajo.description;
    const category = trabajo.category;
    const link = trabajo.link;

    const html_title = document.createElement('h1');
    html_title.innerHTML = title;
    html_title.id = 'modal_title';

    const html_category = document.createElement('p');
    const category_text = DATA.TEXTOS[window.currentLanguage].CATEGORIAS_PORFOLIO[[Object.keys(DATA.CATEGORIAS_PORFOLIO)[category -1]]];
    html_category.innerHTML = category_text;
    html_category.id = 'modal_category';

    const html_img_overlay = document.createElement('div');
    html_img_overlay.style.backgroundImage = `url(${img})`;
    html_img_overlay.id = 'modal_img';

    const html_img = document.createElement('div');
    html_img.id = 'modal_img_overlay';

    const close_modal = document.createElement('div');
    close_modal.id = 'close_modal';
    close_modal.addEventListener('click', closeModal);
    const close_modal_icon = document.createElement('i');
    close_modal_icon.id = 'close_modal_icon';
    close_modal_icon.classList.add('fa-solid', 'fa-xmark');
    close_modal_icon.addEventListener('click', closeModal);
    close_modal.appendChild(close_modal_icon);

    const html_description_container = document.createElement('div');
    html_description_container.id = 'modal_description_container';

    const html_tools_title = document.createElement('h2');
    html_tools_title.id = 'modal_tools_title';
    html_tools_title.innerHTML = window.currentLanguage == LANGUAGES.ESPANOL ? TEXTOS.es.MODAL_TOOLS : TEXTOS.en.MODAL_TOOLS;
    const html_tools = document.createElement('ul');
    html_tools.id = 'modal_tools';

    tools.forEach(tool => {
        const html_tool = document.createElement('li');
        html_tool.innerHTML = tool;
        html_tools.appendChild(html_tool);
    });

    html_description_container.appendChild(html_tools_title);
    html_description_container.appendChild(html_tools);

    const html_description_title = document.createElement('h2');
    html_description_title.id = 'modal_description_title';
    html_description_title.innerHTML = window.currentLanguage == LANGUAGES.ESPANOL ? TEXTOS.es.MODAL_DESCRIPTION : TEXTOS.en.MODAL_DESCRIPTION;

    const html_description = document.createElement('p');
    html_description.innerHTML = window.currentLanguage == LANGUAGES.ESPANOL ? description.es : description.en;
    html_description.id = 'modal_description';

    html_description_container.appendChild(html_description_title);
    html_description_container.appendChild(html_description);

    const html_keywords_title = document.createElement('h2');
    html_keywords_title.id = 'modal_keywords_title';
    html_keywords_title.innerHTML = window.currentLanguage == LANGUAGES.ESPANOL ? TEXTOS.es.MODAL_KEYWORDS : TEXTOS.en.MODAL_KEYWORDS;
    const html_keywords = document.createElement('ul');
    html_keywords.id = 'modal_keywords';

    keywords.forEach(keyword => {
        const html_keyword = document.createElement('li');
        html_keyword.innerHTML = keyword;
        html_keywords.appendChild(html_keyword);
    });

    html_description_container.appendChild(html_keywords_title);
    html_description_container.appendChild(html_keywords);

    const html_link = document.createElement('a');
    html_link.innerHTML = window.currentLanguage == LANGUAGES.ESPANOL ? TEXTOS.es.MODAL_LINK : TEXTOS.en.MODAL_LINK;
    html_link.innerHTML += ' <i class="fa-solid fa-arrow-up-right-from-square smaller"></i>';
    html_link.href = link;
    html_link.id = 'modal_link';
    html_link.target = '_blank';
    html_link.addEventListener('click', closeModal);

    html_img_overlay.appendChild(html_img);
    modal.appendChild(html_img_overlay);
    modal.appendChild(close_modal);
    modal.appendChild(html_title);
    modal.appendChild(html_category);
    modal.appendChild(html_description_container);
    modal.appendChild(html_link);

    modal_overlay.appendChild(modal);
    document.body.appendChild(modal_overlay);
}

export function changeLanguage(new_language) {
    window.currentLanguage.push(new_language);
    let textos_a_usar;
    const boton_idioma_ingles = document.getElementById('cambiar_lenguaje_a_ingles').parentNode;
    const boton_idioma_espanol = document.getElementById('cambiar_lenguaje_a_español').parentNode;

    if (new_language == LANGUAGES.ESPANOL) {
        textos_a_usar = TEXTOS.es;

        boton_idioma_ingles.addEventListener('click', function () {
            window.currentLanguage.pop();
            changeLanguage(LANGUAGES.INGLES);
        });

        boton_idioma_ingles.classList.remove('idioma_seleccionado');
        boton_idioma_espanol.classList.toggle('idioma_seleccionado');

        boton_idioma_espanol.replaceWith(boton_idioma_espanol.cloneNode(true));
    } else {
        textos_a_usar = TEXTOS.en;

        boton_idioma_espanol.addEventListener('click', function () {
            window.currentLanguage.pop();
            changeLanguage(LANGUAGES.ESPANOL);
        });

        boton_idioma_espanol.classList.remove('idioma_seleccionado');
        boton_idioma_ingles.classList.toggle('idioma_seleccionado');
        boton_idioma_ingles.replaceWith(boton_idioma_ingles.cloneNode(true));
    }
    document.documentElement.lang = new_language;
    document.title = textos_a_usar.TITULO_PAGINA;
    document.getElementById('subtitle').innerHTML = textos_a_usar.SUBTITLE_HERO;
    document.getElementById('extracto_banner').innerHTML = textos_a_usar.EXTRACTO_BANNER_MI_PERSONA;
    document.getElementById('boton_cv').innerHTML = textos_a_usar.BOTON_CV_BANNER_MI_PERSONA;
    document.getElementById('boton_cv').href = `./cvweb.html#${new_language}`;

    document.getElementById('porfolio_bloque_interior_subtitle').innerHTML = textos_a_usar.CATEGORIAS_PORFOLIO.DISENO;
    document.getElementById('seccion_contacto_titulo').innerHTML = textos_a_usar.TITULO_CONTACTO;
    document.getElementById('contacto_extra_input').placeholder = textos_a_usar.BLOQUE_CONTACTO_EXTRA.PLACEHOLDER_INPUT;
    document.getElementById('contacto_extra_button').innerHTML = textos_a_usar.BLOQUE_CONTACTO_EXTRA.BOTON_GENERAR_TEXTO;
    document.getElementById('small_info').innerHTML = textos_a_usar.BLOQUE_CONTACTO_EXTRA.SMALL_INFO;
    document.getElementById('small_pd').innerHTML = textos_a_usar.BLOQUE_CONTACTO_EXTRA.SMALL_PD;
    document.getElementById('div_form_contacto_container_titulo').innerHTML = textos_a_usar.BLOQUE_CONTACTO_TITULO;
    document.getElementById('campo_form_nombre').innerHTML = textos_a_usar.CAMPOS_FORMULARIO.NOMBRE;
    document.getElementById('campo_form_email').innerHTML = textos_a_usar.CAMPOS_FORMULARIO.EMAIL;
    document.getElementById('campo_form_mensaje').innerHTML = textos_a_usar.CAMPOS_FORMULARIO.MENSAJE;
    document.getElementById('submit_button').innerHTML = textos_a_usar.CAMPOS_FORMULARIO.BOTON_ENVIAR;
    document.getElementById('contact_form_nombre').placeholder = textos_a_usar.CAMPOS_FORMULARIO.NOMBRE_PLACEHOLDER;
    document.getElementById('contact_form_email').placeholder = textos_a_usar.CAMPOS_FORMULARIO.EMAIL_PLACEHOLDER;
    document.getElementById('contact_form_mensaje').placeholder = textos_a_usar.CAMPOS_FORMULARIO.MENSAJE_PLACEHOLDER;
    document.getElementById('footer').innerHTML = textos_a_usar.FOOTER;

    const a = document.createElement('a');
    a.href = 'https://media.marioa.me';
    a.target = '_blank';
    a.innerHTML = 'Julián Mario Amé';
    a.innerHTML += ' <i class="fa-solid fa-arrow-up-right-from-square smaller"></i>';
    document.getElementById('footer').appendChild(a);
}


export function removeScrollButton(target_id) {
    //This removes the element that triggered the function
    let element;
    if (target_id == 'scroll_button_icon') {
        element = document.getElementById(target_id).parentElement;
    } else {
        element = document.getElementById(target_id);
    }
    element.classList.add("short-fade-out");

    setTimeout(function () {
        element.remove();
    }, 1000);

}

export function scroll_to_mi_persona(e) {
    e.preventDefault();
    //This scrolls to the "banner_mi_persona" element
    window.scrollTo({
        top: document.getElementById('banner_mi_persona').offsetTop,
        left: 0,
        behavior: 'smooth'
    });

    removeScrollButton(e.target.id);

}