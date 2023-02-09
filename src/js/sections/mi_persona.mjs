import {currentLanguage, LANGUAGES} from '../../configs/configs.mjs';
import {
    createSpacer,
} from '../functions.mjs';
import {
    IS_MOBILE
} from '../../configs/configs.mjs';



export function createMiPersona(DATA, body) {
    const banner_mi_persona = document.createElement('section');
    banner_mi_persona.id = 'banner_mi_persona';
    
    if (IS_MOBILE){
        const overlay_gradiente = document.createElement('div');
        overlay_gradiente.id = 'overlay_gradiente_mi_persona';
        banner_mi_persona.appendChild(overlay_gradiente);
    }

    banner_mi_persona.appendChild(createSpacer());
    const container_banner_mi_persona = document.createElement('div');
    container_banner_mi_persona.id = 'container_banner_mi_persona';

    const title = document.createElement('p');
    title.id = 'extracto_banner';
    title.innerHTML = DATA.TEXTOS.BANNER_MI_PERSONA;
    container_banner_mi_persona.appendChild(title);

    container_banner_mi_persona.appendChild(createSpacer(1));

    const boton_descarga_cv = document.createElement('a');
    if (currentLanguage == LANGUAGES.ESPANOL) {
        boton_descarga_cv.href = DATA.URLS_CV.ESPANOL;
    } else {
        boton_descarga_cv.href = DATA.URLS_CV.INGLES;
    }
    boton_descarga_cv.title = 'Descarga del Curriculum Vitae';
    boton_descarga_cv.classList.add('boton_gris');
    boton_descarga_cv.classList.add('mt-1');
    boton_descarga_cv.innerHTML = 'Descargar CV';
    boton_descarga_cv.target = '_blank';
    container_banner_mi_persona.appendChild(boton_descarga_cv);


    banner_mi_persona.appendChild(container_banner_mi_persona);
    banner_mi_persona.appendChild(createSpacer(4));


    body.appendChild(banner_mi_persona);
}