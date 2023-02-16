import * as DATA from './data.mjs';


export function createSpacer(size = 1) {
    //Creates a Flebox spacer with the asigned grow value (check styles.css)
    let spacer = document.createElement('div');
    if (size > 4) {
        size = 4;
    }
    spacer.classList.add(`spacer-${size}`);
    spacer.innerHTML = ' ';
    return spacer;
}

export function createRow() {
    let row = document.createElement('div');
    row.classList.add('flex_row');

    return row;
}

export function findInObject(object, element) {
    // Receives an object and tries to find element in it.
    // Returns index of object, Object transformed into an array
    // Meant for Diccionaries

    const array = Object.entries(object);

    const objectElement = array.find(subArray => subArray[1] == element);
    const index = array.indexOf(objectElement);

    return [index, array, objectElement];
}

export function openModal(e) {
    //This function manages an UI modal
    const modal_overlay = document.createElement('div');
    modal_overlay.id = 'modal_overlay';

    const modal = document.createElement('div');
    modal.id = 'modal';

    const iframe = document.createElement('iframe');
    console.log(e.target.parentElement.dataset.trabajo_id);

    let trabajo = DATA.TRABAJOS_PORFOLIO.find(trabajo => trabajo.id == e.target.parentElement.dataset.trabajo_id);
    iframe.src = trabajo.link;

    modal.appendChild(iframe);

    modal_overlay.appendChild(modal);
    document.body.appendChild(modal_overlay);
}


export function parallax(parallaxElements) {
    // The parallax function
    const parallax = elements => {
        if ('undefined' !== elements && elements.length > 0) {
            elements.forEach(element => {
                let y = window.innerHeight - element.getBoundingClientRect().top;
                if (y > 0) {
                    element.style.backgroundPositionY = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
                }
            })
        }
    }

    //If element is in viewport, set its position
    parallax(parallaxElements)
}