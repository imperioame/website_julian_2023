export function addMobileElements() {
    const banner_mi_persona = document.getElementById('banner_mi_persona');
    const overlay_gradiente = document.createElement('div');
    overlay_gradiente.id = 'overlay_gradiente_mi_persona';
    banner_mi_persona.appendChild(overlay_gradiente);


    const spacer_banner_mi_persona = document.getElementById('banner_mi_persona').getElementsByClassName('spacer-4')[0];
    spacer_banner_mi_persona.classList.remove('spacer-4');
    spacer_banner_mi_persona.classList.add('spacer-1');

}



export function removeMobileElements() {
    const banner_mi_persona = document.getElementById('banner_mi_persona');
    if(banner_mi_persona){
        banner_mi_persona.remove();
    }

    const spacer_banner_mi_persona = document.getElementById('banner_mi_persona').getElementsByClassName('spacer-4')[0];
    spacer_banner_mi_persona.classList.remove('spacer-1');
    spacer_banner_mi_persona.classList.add('spacer-4');
}