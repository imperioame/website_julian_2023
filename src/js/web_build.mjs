import {
    addMobileElements,
    removeMobileElements
} from './mobile_adaptation.mjs';

import {
    populatePorfolio
} from './sections/mis_trabajos.mjs'
import {
    addSendMailFunctionalityToForm
} from './sections/contacto.mjs'


//Sección mis trabajos
populatePorfolio();

//Sección contacto
addSendMailFunctionalityToForm();


export let IS_MOBILE;
window.onresize = function () {
    //Also defined in css/mobile.css
    IS_MOBILE = window.innerWidth < 768;
     if (IS_MOBILE){
        addMobileElements();
     }else{
        removeMobileElements();
     }
}

if (IS_MOBILE){
    addMobileElements();
}


const boton_descarga_cv = document.getElementById('container_banner_mi_persona').getElementsByClassName('boton_gris')[0];
console.log(boton_descarga_cv);