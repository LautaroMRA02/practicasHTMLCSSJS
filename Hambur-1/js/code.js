const iconoMenu = document.querySelector("#icono_menu");
menu = document.querySelector("#menu");

iconoMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');


    const rutaActual = e.target.getAttribute('src');

    if (rutaActual == 'assets/bars-solid.svg') {
        e.target.setAttribute('src','assets/bars-solid1.svg');
    } else {
        e.target.setAttribute('src','assets/bars-solid.svg');
    }
});
 