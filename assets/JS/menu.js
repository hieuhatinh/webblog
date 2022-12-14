// menu-mobile
const menu = document.querySelector('.js-menu');
const btn = document.querySelector('.js-mobile-btn');

function showMenu() {
    menu.classList.add('open');
}

function hideMenu() {
    menu.classList.remove('open');
}

btn.addEventListener('click', showMenu);

menu.addEventListener('click', hideMenu);