// // select DOM Items
// //HAMBURGER BUTTON SELECTORS------------------------------------------
// //querySelector only grabs the first type
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// // //querySelectorAll selects all and puts it into a Node (like an array)
// //const navItems = document.querySelectorAll('.nav-item');
// //const = constant
// //HAMBURGER BUTTON SELECTORS------------------------------------------

//BUSINESS CARD SELECTORS---------------------------------------------
const businessCard = document.querySelector('.card');
const nameHeader = document.querySelector('.card-title');
const specHeader = document.querySelector('.card-subtitle');
const textHeader = document.querySelector('.card-text');
const lineHeader = document.querySelector('.card-line');
const flipCard = document.querySelector('.card-nav');
//querySelectorAll selects all and puts it into a Node (like an array)
const icons = document.querySelectorAll('.card-icons');
const navItems = document.querySelectorAll('.nav-item');
//BUSINESS CARD SELECTORS---------------------------------------------

//SET INITIAL STATES--------------------------------------------------
//MENU
// let showMenu = false; //let
//BUSINESSCARD
let flip = false;
//SET INITIAL STATES--------------------------------------------------

//SET EVENT LISTENERS-------------------------------------------------
businessCard.addEventListener('click', toggleNavi);
flipCard.addEventListener('click', toggleNavi);
// menuBtn.addEventListener('click', toggleMenu);
//SET EVENT LISTENERS-------------------------------------------------

//BUSINESS CARD NAVI--------------------------------------------------
function toggleNavi() {
    if (!flip) {
        businessCard.classList.add('flip'); //businessCard.style.transform = 'rotateY(180deg)';
        //businessCard.style.animation = 'rotateY(180deg)';
        nameHeader.classList.add('hidden');
        specHeader.classList.add('hidden');
        textHeader.classList.add('hidden');
        lineHeader.classList.add('hidden');
        flipCard.classList.add('show');
        icons.forEach(item => item.classList.add('hidden'));
        navItems.forEach(item => item.classList.add('show'));

        //set card state
        flip = true;
    } else {
        businessCard.classList.remove('flip');
        nameHeader.classList.remove('hidden');
        specHeader.classList.remove('hidden');
        textHeader.classList.remove('hidden');
        lineHeader.classList.remove('hidden');
        flipCard.classList.remove('show');
        icons.forEach(item => item.classList.remove('hidden'))
        navItems.forEach(item => item.classList.remove('show'));

        //set card state
        flip = false;
    }
}


// function toggleMenu() {
//     if (!showMenu) {

//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));

//         //set menu state
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => item.classList.remove('show'));

//         showMenu = false;
//     }
// }