export function createEscaneame(body) {
    const seccion_escaneame = document.createElement('section');
    seccion_escaneame.id = 'seccion_escaneame';
    title = document.createElement('h2');
    title.innerHTML = 'Escaneame';

    seccion_escaneame.appendChild(title);
    body.appendChild(seccion_escaneame);
}