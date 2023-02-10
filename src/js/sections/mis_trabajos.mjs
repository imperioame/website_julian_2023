import {
    createSpacer,
    buildPorfolio,
} from '../functions.mjs';


export function createMisTrabajos(DATA, body) {
    const seccion_mis_trabajos = document.createElement('section');
    seccion_mis_trabajos.id = 'seccion_mis_trabajos';

    const mis_trabajos_background = document.createElement('div');
    mis_trabajos_background.id = 'mis_trabajos_background';
    mis_trabajos_background.innerHTML = ' ';
    seccion_mis_trabajos.appendChild(mis_trabajos_background);

    const title = document.createElement('h2');
    title.innerHTML = 'Porfolio';
    seccion_mis_trabajos.appendChild(title);

    const bloque_interior = document.createElement('div');
    bloque_interior.id = 'porfolio_bloque_interior';
    seccion_mis_trabajos.appendChild(bloque_interior);


    const botones_mas_trabajos = document.createElement('footer');
    botones_mas_trabajos.id = 'botones_mas_trabajos';
    seccion_mis_trabajos.appendChild(botones_mas_trabajos);


    //Footer del porfolio
    DATA.URLS_PORFOLIO.forEach(porfolio_element => {
        let boton_mas_trabajos = document.createElement('a');
        boton_mas_trabajos.href = porfolio_element.url;
        boton_mas_trabajos.target = '_blank';
        boton_mas_trabajos.title = porfolio_element.title;
        boton_mas_trabajos.classList.add('boton_gris');
        boton_mas_trabajos.classList.add('fa-2xl');

        let icon = document.createElement('i');
        icon.classList += ' ' + porfolio_element.icon;
        boton_mas_trabajos.appendChild(icon);


        botones_mas_trabajos.appendChild(createSpacer());
        botones_mas_trabajos.appendChild(boton_mas_trabajos);
    });
    botones_mas_trabajos.appendChild(createSpacer());



    body.appendChild(seccion_mis_trabajos);
    buildPorfolio('porfolio_bloque_interior', DATA.CATEGORIAS_PORFOLIO.DISENO);


}