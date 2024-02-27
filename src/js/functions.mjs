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

export function openModal(e) {
    //This function manages an UI modal
    const modal_overlay = document.createElement('div');
    modal_overlay.id = 'modal_overlay';

    const modal = document.createElement('div');
    modal.id = 'modal';

    const iframe = document.createElement('iframe');

    let trabajo = DATA.TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);
    iframe.src = trabajo.link;

    modal.appendChild(iframe);

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