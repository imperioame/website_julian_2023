export function addMobileElements() {
    if (!document.getElementById('overlay_gradiente_mi_persona')) {
        console.log('no hay overlay gradiente');
        const banner_mi_persona = document.getElementById('banner_mi_persona');
        const overlay_gradiente = document.createElement('div');
        overlay_gradiente.id = 'overlay_gradiente_mi_persona';
        banner_mi_persona.appendChild(overlay_gradiente);
    }

    const spacer_banner_mi_persona = document.querySelector('#banner_mi_persona .spacer-4');
    if (spacer_banner_mi_persona) {
        spacer_banner_mi_persona.classList.remove('spacer-4');
        spacer_banner_mi_persona.classList.add('spacer-1');
    }
}



export function removeMobileElements() {
    const overlay_gradiente = document.getElementById('overlay_gradiente_mi_persona');
    if (overlay_gradiente) {
        overlay_gradiente.remove();
    }

    const spacer_banner_mi_persona = document.querySelector('#banner_mi_persona .spacer-1');
    if (spacer_banner_mi_persona) {
        spacer_banner_mi_persona.classList.remove('spacer-1');
        spacer_banner_mi_persona.classList.add('spacer-4');
    }
}