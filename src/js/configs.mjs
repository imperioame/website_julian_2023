export const MAIL_DATA = {
    MAILHOST: 'smtp.dreamhost.com',
    USERNAME: '',
    PASSWORD: 'hag?yhs?',
    TO: ''
}




export const LANGUAGES = {
    ESPANOL: 'es',
    INGLES: 'en'
}

let userLanguages = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

export var currentLanguage;
if (userLanguages.indexOf(LANGUAGES.ESPANOL) > -1){
    currentLanguage = LANGUAGES.ESPANOL;
}else{
    currentLanguage = LANGUAGES.INGLES;
}

document.documentElement.lang = currentLanguage;