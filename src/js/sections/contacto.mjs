import {
    sendMail,
} from '../../services/mail.mjs';

export function addSendMailFunctionalityToForm() {

    const form_contacto = document.querySelector('#div_form_contacto_container form');

    form_contacto.addEventListener('submit', function(e){
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
    });
}
