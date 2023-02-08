import {
    buildContactForm,
} from '../functions.mjs';

export function createContacto(DATA, body) {
    const seccion_contacto = document.createElement('section');
    seccion_contacto.id = 'seccion_contacto';
    let title = document.createElement('h2');
    title.innerHTML = 'Contacto';

    seccion_contacto.appendChild(title);


    const bloque_contacto = document.createElement('div');
    bloque_contacto.id = 'bloque_contacto';

    const contacto_extra = document.createElement('article');
    contacto_extra.id = 'contacto_extra';


    let contacto_extra_container = document.createElement('div');



    const img_contacto_extra = document.createElement('img');
    img_contacto_extra.src = DATA.url_img_contacto_extra;
    img_contacto_extra.alt = 'Imagen representativa del formulario de contacto';
    contacto_extra_container.appendChild(img_contacto_extra);

    const parrafo_contacto_extra = document.createElement('p');
    parrafo_contacto_extra.innerHTML = DATA.TEXTOS.BLOQUE_CONTACTO_PARRAFO;
    contacto_extra_container.appendChild(parrafo_contacto_extra);

    contacto_extra.appendChild(contacto_extra_container);
    bloque_contacto.appendChild(contacto_extra);

    const bloque_form = document.createElement('article');
    bloque_form.id = 'form_contacto_container';

    const form_contacto_container = document.createElement('div');
    

    const form_contacto_title = document.createElement('h3');
    form_contacto_title.innerHTML = DATA.TEXTOS.BLOQUE_CONTACTO_TITULO;
    form_contacto_container.appendChild(form_contacto_title);

    const form_contacto = document.createElement('form');
    buildContactForm(form_contacto);

    form_contacto_container.appendChild(form_contacto);
    bloque_form.appendChild(form_contacto_container);
    bloque_contacto.appendChild(bloque_form);

    seccion_contacto.appendChild(bloque_contacto);
    body.appendChild(seccion_contacto);
}