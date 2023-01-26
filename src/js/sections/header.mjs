export function createHeader(DATA, body) {
    const header = document.createElement('header');
    header.id = 'header';
    const logo = document.createElement('object');
    logo.data = DATA.logo_img.href;
    logo.alt = 'Logo del ImperioAme, marca personal de Julián Amé';
    logo.title = 'Isologo ImperioAme';
    logo.id = 'logo';
    
    header.appendChild(logo);
    body.appendChild(header);
}