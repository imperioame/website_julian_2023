export function sendMail(from, name, subject, text) {
    (function () {
        emailjs.init("bw-B3soQ2MARRdfFx");
    })();


    if (!from || !name || !subject || !text) {
        return 'error';
    }

    var templateParams = {
        subject: subject,
        name: name,
        from: from,
        text: text,
    };


    emailjs.send('dreamhost_smtp', 'CF_Webpage_julian', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            return response;
        }, function (err) {
            console.log('FAILED...', err);
            return err;
        });
}