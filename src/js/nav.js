
function initNav() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');

    if (!menuIcon || !closeIcon || !menu) return;

    
    menuIcon.replaceWith(menuIcon.cloneNode(true));
    closeIcon.replaceWith(closeIcon.cloneNode(true));

    const mi = document.getElementById('menu-icon');
    const ci = document.getElementById('close-icon');

    mi.addEventListener('click', () => {
        menu.classList.toggle('max-lg:hidden');
        mi.classList.toggle('hidden');
        ci.classList.toggle('hidden');
        console.log('menu opened');
    });


    ci.addEventListener('click', () => {
        menu.classList.toggle('max-lg:hidden');
        mi.classList.toggle('hidden');
        ci.classList.toggle('hidden');
        console.log('menu closed');
    });
}

window.initNav = initNav;



