import * as DATA from './data.mjs';

import {
    sendMail,
} from '../services/mail.mjs';
import {
    IS_MOBILE
} from '../configs/configs.mjs';


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
    console.log(e.target.parentElement.dataset.trabajo_id);

    let trabajo = DATA.TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);
    iframe.src = trabajo.link;

    modal.appendChild(iframe);

    modal_overlay.appendChild(modal);
    document.body.appendChild(modal_overlay);
}


export function buildContactForm(page_section, array_inputs = ['nombre', 'email', 'mensaje']) {
    //This function receives an array of inputs and generates a form with them.
    //Then appends it to the DOM object received.
    page_section.addEventListener('submit', sendEmail);

    array_inputs.forEach(value => {
        const label = document.createElement('label');
        label.innerHTML = capitalizeString(value);

        let input;
        if (value == 'mensaje') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = findInObject(DATA.FORM_TYPES, value)[2];
        }

        if (value == 'nombre') {
            input.placeholder = 'Juan';
            input.type = 'text';
        } else if (value == 'email') {
            input.placeholder = 'juan@correo.com.ar';
            input.type = 'email';
        } else if (value == 'mensaje') {
            input.placeholder = 'Vi tu perfil y tengo una idea para...';
        }

        input.id = `contact_form_${value}`;
        input.required = true;


        page_section.appendChild(label);
        page_section.appendChild(input);
    });

    const captcha = document.createElement('div');
    captcha.id = 'form_captcha'
    captcha.classList.add('g-recaptcha');
    captcha.dataset.sitekey = process.env.CAPTCHA_SITE_KEY;
    page_section.appendChild(captcha);


    const submit_button = document.createElement('button');
    submit_button.type = 'submit';
    submit_button.id = 'submit_button';

    submit_button.innerHTML = 'Enviar';

    page_section.appendChild(submit_button);
}


function capitalizeString(string) {
    //This function receives a string and turns the first char to uppercase
    const firstChar = string.charAt(0).toUpperCase();
    return firstChar + string.slice(1);
}
export function sendEmail(e) {
    //This function uses emailjs to contact form email posting
    e.preventDefault();

    if (!RECAPTCHA_READY){
        callTooltip('submit_button', 'El recaptcha no se ha cargado correctamente', 'red');
        return 'error';
    }
    sendMail(
        `${document.getElementById('contact_form_email').value}`,
        `${document.getElementById('contact_form_nombre').value}`,
        "Contacto a través de la página web de " + `${document.getElementById('contact_form_nombre').value}`,
        `${document.getElementById('contact_form_mensaje').value}`, grecaptcha.getResponse()
    );
    console.log(grecaptcha.getResponse());
}