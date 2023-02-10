export function callTooltip(where, mesaje, color) {
    //This function generates a small tooltip with the given text and color.

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.setAttribute.color = color;

    const icon = document.createElement('i');
    icon.classList.add('fa-regular');
    icon.classList.add('fa-circle-info');

    tooltip.appendChild(icon);

    const mesaje_html = document.createElement('p');
    mesaje_html.innerHTML = mesaje;
    tooltip.appendChild(mesaje_html);

    document.getElementById(where).appendChild(tooltip);

    setTimeout(function () {
        document.getElementsByClassName('tooltip')[0].remove();
    }, 2000);
}