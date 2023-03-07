import {
    scroll_to_mi_persona,
    removeScrollButton
} from '../functions.mjs';

export function createScrollButton() {
    const scroll_button = document.createElement('div');
    scroll_button.id = 'scroll_button';
    scroll_button.addEventListener('click', scroll_to_mi_persona);
    scroll_button.classList.add('shadow_standard');

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-angles-down');
    i.id = 'scroll_button_icon';
    scroll_button.appendChild(i);

    document.getElementById('three_canvas').appendChild(scroll_button);
}


export function scroll_event_listener_function() {
    //Adds scroll event listener for scroll button (three overlay);
    const scroll_button = document.getElementById('scroll_button');
    if (window.scrollY > document.getElementById('banner_mi_persona').offsetTop / 4) {
        if (scroll_button) {
            removeScrollButton('scroll_button');
        }
    } else {
        if (!scroll_button) {
            createScrollButton();
        }
    }
}