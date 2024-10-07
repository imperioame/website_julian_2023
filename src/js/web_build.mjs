import {
    addMobileElements,
    removeMobileElements
} from './mobile_adaptation.mjs';

import {
    call_api_hf_gpt2
} from '../services/text_generation.mjs';

import {
    populatePorfolio
} from './sections/mis_trabajos.mjs';



export var IS_MOBILE = window.innerWidth < 900;
window.onresize = function () {
    //Also defined in css/mobile.css
    let new_state = window.innerWidth < 900;
    if (IS_MOBILE != new_state) {
        //Changed from mobile to desktop
        IS_MOBILE = window.innerWidth < 900;

        if (IS_MOBILE) {
            addMobileElements();
        } else {
            removeMobileElements();
        }
    }
}

//Sección mis trabajos
populatePorfolio();

if (IS_MOBILE) {
    addMobileElements();
}


//agrego la llamada a la api de gpt2
document.querySelector('#contacto_extra button').addEventListener('click', call_api_hf_gpt2);
//call_api_hf_gpt2();

