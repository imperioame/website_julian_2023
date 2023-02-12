import {
  callTooltip
} from '../js/sections/tooltip.mjs';
const axios = require("axios");

async function verifyRecaptcha(recaptcha) {
  try {
    const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", {
      secret: process.env.CAPTCHA_SECRET_KEY,
      response: recaptcha
    });

    if (response.data.success) {
      // The reCAPTCHA response is valid
      return true;
    } else {
      // The reCAPTCHA response is invalid
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function sendMail(from, name, subject, text, recaptcha_value) {
  (function () {
    emailjs.init("bw-B3soQ2MARRdfFx");
  })();


  if (!from || !name || !subject || !text) {
    callTooltip('submit_button', 'Hay campos incompletos/inválidos en el formulario.', 'red');
    return 'error';
  }

  if (!verifyRecaptcha(recaptcha_value)) {
    callTooltip('submit_button', 'Error en la validación del recaptcha con el servidor.', 'red');
    return 'Error en el recaptcha';
  } else {
    var templateParams = {
      subject: subject,
      name: name,
      from: from,
      text: text,
    };


    emailjs.send('dreamhost_smtp', 'CF_Webpage_julian', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        callTooltip('div_form_contacto_container', 'Mensaje enviado correctamente.', 'green');
        return response;
      }, function (err) {
        console.log('FAILED...', err);
        callTooltip('submit_button', 'El mensaje no se ha podido enviar.', 'red');
        return err;
      });
  }
}