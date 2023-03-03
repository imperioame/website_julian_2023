import {
    LANGUAGES
} from '../js/data.mjs';
import {
    changeLanguage
} from '../js/functions.mjs';

let userLanguages = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

export var currentLanguage = [];

if(userLanguages.length > 2){
    userLanguages = userLanguages.slice(0,2);
}

if (userLanguages.indexOf(LANGUAGES.ESPANOL) > -1) {
    currentLanguage.push(LANGUAGES.ESPANOL);
} else {
    currentLanguage.push(LANGUAGES.INGLES);
}

changeLanguage(currentLanguage[0]);