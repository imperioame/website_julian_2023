const body = document.body;
import * as DATA from './data.mjs';
import {
    IS_MOBILE
} from '../configs/configs.mjs';
import {
    addMobileElements,
    removeMobileElements
} from './mobile_adaptation.mjs';

import {
    populatePorfolio
} from './sections/mis_trabajos.mjs'


import {
    createContacto
} from './sections/contacto.mjs'
import {
    createFooter
} from './sections/footer.mjs'


//Sección mis trabajos
populatePorfolio();




//Sección contacto
createContacto(DATA, body);

//footer
createFooter(body);


if (IS_MOBILE){
    addMobileElements();
}


const boton_descarga_cv = document.getElementById('container_banner_mi_persona').getElementsByClassName('boton_gris')[0];
console.log(boton_descarga_cv);