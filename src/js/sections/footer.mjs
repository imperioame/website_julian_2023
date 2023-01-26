export function createFooter(body){
    const footer = document.createElement('footer');
    footer.id = 'footer';

    footer.innerHTML = 'Desarrollado por ';
    const a = document.createElement('a');
    a.href = 'https://linktr.ee/imperioame';
    a.innerHTML = 'Julián Amé';

    footer.appendChild(a);
    body.appendChild(footer);
}