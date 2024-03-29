const btnMenu = document.querySelector ('.btn-menu');

let isMenuOpen = false;

btnMenu.addEventListener ('click', toggleMenu);

function toggleMenu () 
{
    isMenuOpen = !isMenuOpen;

    const menu = document.querySelector ('.menu');

    if(isMenuOpen)
        menu.classList.add ('open');
    else 
        menu.classList.remove ('open');

    if (isMenuOpen)
        btnMenu.src = './images/icon-close.svg';
    else
        btnMenu.src = './images/icon-hamburger.svg'
}   