import {
    createSpacer,
} from '../functions.mjs';

export function createHeroSection(DATA, body) {
    const three_overlay = document.createElement('div');
    three_overlay.id = 'three_overlay';

    //Agrego un spacer lateral izq.
    three_overlay.appendChild(createSpacer());

    //Agrego la sección principal para poner el contenido
    const hero = document.createElement('section');
    hero.id = 'hero_section';


    //Agrego el título
    let title = document.createElement('h1');
    title.innerHTML = 'Julián Amé';
    title.id = 'title';
    hero.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.id = 'subtitle';
    subtitle.classList.add('animated_text');
    subtitle.innerHTML = DATA.TEXTOS.SUBTITLE_HERO;

    hero.appendChild(subtitle);
    three_overlay.appendChild(hero);
    body.appendChild(three_overlay);
}