import {
  callTooltip
} from '../js/sections/tooltip.mjs';

export function sendMail(from, name, subject, text, recaptcha_token) {
  (function () {
    emailjs.init("bw-B3soQ2MARRdfFx");
  })();


  if (!from || !name || !subject || !text || !recaptcha_token) {
    callTooltip('submit_button', 'Hay campos incompletos/inválidos en el formulario.', 'red');
    return 'error en los campos provistos';
  }

  var templateParams = {
    subject: subject,
    name: name,
    from: from,
    text: text,
    'g-recaptcha-response': recaptcha_token
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