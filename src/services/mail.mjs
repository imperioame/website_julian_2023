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
      callTooltip('submit_button', 'Mensaje enviado correctamente.', 'green');

      setTimeout(function () {
        document.getElementById('contact_form_email').value = '';
        document.getElementById('contact_form_nombre').value = '';
        document.getElementById('contact_form_nombre').value = '';
        document.getElementById('contact_form_mensaje').value = '';
      }, 10000);
      return;
    }, function (err) {
      callTooltip('submit_button', 'El mensaje no se ha podido enviar.', 'red');
      return;
    });

}