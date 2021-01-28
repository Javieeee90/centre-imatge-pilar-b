var barsMenu = document.getElementById('menu-hamburguesa');
var menu = document.getElementById('menu');
var barsMenuIcon = document.getElementById('menu-hamburguesa-icon');

const BARS_MENU_ICON = './img/menu.svg';
const BARS_MENU_CLOSE_ICON = './img/cerrar.svg';

barsMenu.addEventListener('click', () => {
    menu.hidden = !menu.hidden;

    if (!menu.hidden) {
        barsMenuIcon.src = BARS_MENU_CLOSE_ICON;
    } else {
        barsMenuIcon.src = BARS_MENU_ICON;
    }
});