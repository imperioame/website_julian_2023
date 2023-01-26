const body = document.body;
import * as DATA from './data.mjs';

import {createHeader} from './sections/header.mjs'
import {createHeroSection} from './sections/hero.mjs'
import {createMiPersona} from './sections/mi_persona.mjs'
import {createMisTrabajos} from './sections/mis_trabajos.mjs'
import {createEscaneame} from './sections/escaneame.mjs'
import {createContacto} from './sections/contacto.mjs'
import {createFooter} from './sections/footer.mjs'


//Creo un header simple
createHeader(DATA, body);

//Creo el espacio para el canvas de threejs
const three_canvas = document.createElement('section');
three_canvas.id = 'three_canvas';
body.appendChild(three_canvas);

//Creo la sección principal, sobre el canvas
createHeroSection(DATA, body)

//Sección mi persona
createMiPersona(DATA, body);

//Sección mis trabajos
createMisTrabajos(DATA, body);

//Sección escaneame
createEscaneame(body);

//Sección contacto
createContacto(DATA, body);

//footer
createFooter(body);