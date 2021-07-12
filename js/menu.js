// select DOM Items
//querySelector only grabs the first type
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// //querySelectorAll selects all and puts it into a Node (like an array)
const navItems = document.querySelectorAll('.nav-item');
// //const = constant
// const a = document.querySelector('.a')

// //Set initial state of menu
let showMenu = false; //let

menuBtn.addEventListener('click', toggleMenu);
// a.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        showMenu = false;
    }
}