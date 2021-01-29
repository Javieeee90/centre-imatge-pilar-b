var barsMenu = document.getElementById('menu-hamburguesa');
var menu = document.getElementById('menu');
menu.style.right = '-100rem'

var menuBack = document.getElementById('menu-back');

var barsMenuIcon = document.getElementById('menu-hamburguesa-icon');

const BARS_MENU_ICON = './img/menu.svg';
const BARS_MENU_CLOSE_ICON = './img/cerrar.svg';

barsMenu.addEventListener('click', () => {
    
    if (menu.style.right.includes('-100rem')) {
        menuBack.hidden = false;
        showMenu();
    } else {
        menuBack.hidden = true;
        hideMenu();
    }

});

menuBack.addEventListener('click', function() {
    menuBack.hidden = !menuBack.hidden;
    if (menuBack.hidden) {
        hideMenu();
    } else {
        showMenu();
    }
});

function showMenu () {
    var from = -100;
    var id = setInterval(function(){
        if (from == 0) {
            barsMenuIcon.src = BARS_MENU_CLOSE_ICON;
            clearInterval(id);
        } else {
            from = from + 2; 
            menu.style.right = from + "rem"; 
        }
    }, 1);
}

function hideMenu () {
    var from = 0;
    var id = setInterval(function(){
        if (from == -100) {
            barsMenuIcon.src = BARS_MENU_ICON;
            clearInterval(id);
        } else {
            from = from - 2; 
            menu.style.right = from + "rem"; 
        }
    }, 1);
}

