import {
    addMobileElements,
    removeMobileElements
} from './mobile_adaptation.mjs';

import {
    populatePorfolio
} from './sections/mis_trabajos.mjs';

export var IS_MOBILE = window.innerWidth < 768;
window.onresize = function () {
    //Also defined in css/mobile.css
    let new_state = window.innerWidth < 768;
    if (IS_MOBILE != new_state) {
        //Changed from mobile to desktop
        IS_MOBILE = window.innerWidth < 768;

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