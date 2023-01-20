const body = document.body;
//Levanto imagenes externas al compilar
const logo_img = new URL('../imgs/Logo_ImperioAme.svg',
    import.meta.url);



//Creo un header simple
const header = document.createElement('header');
header.id = 'header';
const logo = document.createElement('img');
logo.src = logo_img.href;
logo.alt = 'Logo del ImperioAme, marca personal de Julián Amé';
logo.title = 'Isologo ImperioAme';
logo.id = 'logo';
header.appendChild(logo);
body.appendChild(header)


//Creo el espacio para el canvas de threejs
const three_canvas = document.createElement('section');
three_canvas.id = 'three_canvas';
body.appendChild(three_canvas);



//Genero el overlay a threeJs
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
subtitle.innerHTML = 'Diseñador Multimedial | Lic. En Comunicación | Director de proyectos digitales | Quality Assurance Lead';

hero.appendChild(subtitle);
three_overlay.appendChild(hero);
body.appendChild(three_overlay);
const subtitle_element = document.getElementById("subtitle");




//Sección mi persona
const banner_mi_persona = document.createElement('section');
banner_mi_persona.id = 'banner_mi_persona';
banner_mi_persona.appendChild(createSpacer());

title = document.createElement('p');
title.id = 'extracto_banner';
title.innerHTML = "Diseñador Multimedial y líder de proyectos digitales.<br> Emprendedor y apasionado en la organización y organizaciones.<br> Técnico por naturaleza.";
banner_mi_persona.appendChild(title);
banner_mi_persona.appendChild(createSpacer(4));


body.appendChild(banner_mi_persona);





//Sección mis trabajos
const seccion_mis_trabajos = document.createElement('section');
seccion_mis_trabajos.id = 'seccion_mis_trabajos';

const mis_trabajos_background = document.createElement('div');
mis_trabajos_background.id = 'mis_trabajos_background';
mis_trabajos_background.innerHTML = ' ';
seccion_mis_trabajos.appendChild(mis_trabajos_background);

title = document.createElement('h2');
title.innerHTML = 'Porfolio';
seccion_mis_trabajos.appendChild(title);

const bloque_interior = document.createElement('div');
bloque_interior.id = 'porfolio_bloque_interior';
seccion_mis_trabajos.appendChild(bloque_interior);


const botones_mas_trabajos = document.createElement('footer');
botones_mas_trabajos.id = 'botones_mas_trabajos';
seccion_mis_trabajos.appendChild(botones_mas_trabajos);

//Footer del porfolio
URLS_PORFOLIO.forEach(porfolio_element => {
    let boton_mas_trabajos = document.createElement('a');
    boton_mas_trabajos.href = porfolio_element.url;
    boton_mas_trabajos.target = '_blank';
    boton_mas_trabajos.title = porfolio_element.title;
    boton_mas_trabajos.classList.add('boton_mas_trabajos');
    boton_mas_trabajos.classList.add('fa-2xl');

    let icon = document.createElement('i');
    icon.classList += ' ' + porfolio_element.icon;
    boton_mas_trabajos.appendChild(icon);


    botones_mas_trabajos.appendChild(createSpacer());
    botones_mas_trabajos.appendChild(boton_mas_trabajos);
});
botones_mas_trabajos.appendChild(createSpacer());



body.appendChild(seccion_mis_trabajos);
buildPorfolio('porfolio_bloque_interior', CATEGORIAS_PORFOLIO.DISENO);





//Sección escaneame
const seccion_escaneame = document.createElement('section');
seccion_escaneame.id = 'seccion_escaneame';
title = document.createElement('h2');
title.innerHTML = 'Escaneame';

seccion_escaneame.appendChild(title);
body.appendChild(seccion_escaneame);

//Sección contacto
const seccion_contacto = document.createElement('section');
seccion_contacto.id = 'seccion_contacto';
title = document.createElement('h2');
title.innerHTML = 'Contacto';

seccion_contacto.appendChild(title);


body.appendChild(seccion_contacto);