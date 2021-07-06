// ABOUT MAIN PAGE
const abt = document.querySelector('.wrapper-main');
//---
// IM PAGE
const imPage = document.querySelector('.wrapper-im');
//---
// MA PAGE
const maPage = document.querySelector('.wrapper-ma');
// IM CARD - click -> im page
const im = document.querySelector('.im-card-text');
const imBtn = document.querySelector('.reim');
//---
// NOT BEING USED YET
// const gd = document.querySelector('.gd-card');
// const sa = document.querySelector('.sa-card');
//---
// STUFF IN IM PAGE
const imTv = document.querySelector('.im-tv');
const eks = document.querySelector('.window');
// INFO IN IM PAGE
const imWeb = document.querySelector('.im-desc-web');
const imGd = document.querySelector('.im-desc-gd');
const imStart = document.querySelector('.im-desc-start');
//---
//MMA CARD
const ma = document.querySelector('.ma-card');
//---
//STUFF IN MA PAGE
const maGr = document.querySelector('.ma-gd');
const maUx = document.querySelector('.ma-ux');
const maPd = document.querySelector('.ma-pd');
const xMa = document.querySelector('.ma-close');
const maGrTab = document.querySelector('.ma-gd-btn');
const maUxTab = document.querySelector('.ma-ux-btn');
const maPdTab = document.querySelector('.ma-pd-btn');
//
//
//TEST
//const [3] channel = { imStart, imWeb, imGd }; learn how to do arrays in java
// const em = document.querySelector('im-desc-icons');
//---
// GAMEPAD BUTTONS
// const a = document.querySelector('.a'); moved to nav
const b = document.querySelector('.b');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

//TO CHECK WHICH TABS ARE OPEN
//Interactive Media
let start = true; ///Previous error: these were declared before the event listeners
let icons = false;
let web = false;
let game = false;
//Multimedia Design
let graphic = true;
let uiuxweb = false;
let prodes = false;

//EVENT LISTENERS
im.addEventListener('click', toggleIm); // TOGGLES IM PAGE
imBtn.addEventListener('click', toggleIm); // ALSO TOGGLES IM PAGE
eks.addEventListener('click', toggleClose); // CLOSES IM PAGE
b.addEventListener('click', toggleClose); // ALSO CLOSES IM PAGE
ma.addEventListener('click', toggleMa); // TOGGLES MA PAGE
xMa.addEventListener('click', closeMa); // CLOSES MA PAGE
maGrTab.addEventListener('click', toggleGr);
maUxTab.addEventListener('click', toggleUx);
maPdTab.addEventListener('click', togglePd);
// a.addEventListener('click', toggleWeb); // IDEALLY FOR NAVIGATION
up.addEventListener('click', toggleForward);
right.addEventListener('click', toggleForward);
down.addEventListener('click', toggleBackward);
left.addEventListener('click', toggleBackward);


// let imP = false;


// let gdP = false;
// let saP = false;

function toggleIm() {
    console.log('IM-clicked');
    console.log(abt);
    console.log(imPage);
    abt.classList.remove('show');
    imPage.classList.add('show');
    imTv.classList.add('show');
    console.log(icons);
    // start = true;
    // console.log(true);
}

function toggleMa() {
    console.log('MA-clicked');
    console.log(abt);
    console.log(maPage);
    abt.classList.remove('show');
    maPage.classList.add('show');
    console.log(icons);
    // start = true;
    // console.log(true);
}
//RENAME TO CLOSEIM
function toggleClose() {

    console.log('closed');
    abt.classList.add('show');
    imPage.classList.remove('show');
    imTv.classList.remove('show');
    // start = true;
    // icons = false;
    // web = false;
    // game = false;
}

function closeMa() {
    console.log('closed');
    abt.classList.add('show');
    maPage.classList.remove('show');
    // start = true;
    // icons = false;
    // web = false;
    // game = false;
}

function toggleForward() {
    if (start) {
        imStart.classList.remove('show');
        start = false;
        icons = true;
        web = false;
        game = false;
    } else if (icons) {
        imWeb.classList.add('show');
        start = false;
        icons = false;
        web = true;
        game = false;
    } else if (web) {
        imWeb.classList.remove('show');
        imGd.classList.add('show');
        start = false;
        icons = false;
        web = false;
        game = true;
    } else {

        imGd.classList.remove('show');
        imStart.classList.add('show');
        start = true;
        icons = false;
        web = false;
        game = false;
    }
}

function toggleBackward() {
    if (start) {
        imStart.classList.remove('show');
        imGd.classList.add('show');
        start = false;
        icons = false;
        web = false;
        game = true;
    } else if (game) {
        imGd.classList.remove('show');
        imWeb.classList.add('show');
        start = false;
        icons = false;
        web = true;
        game = false;
    } else if (web) {
        imWeb.classList.remove('show');
        start = false;
        icons = true;
        web = false;
        game = false;
    } else {
        imStart.classList.add('show');
        start = true;
        icons = false;
        web = false;
        game = false;
    }
}

function toggleGr() {
    console.log('graphic design');
    if (uiuxweb) {
        maUx.classList.remove('show');
        maGr.classList.add('show');
        uiuxweb = false;
        graphic = true;
    } else if (prodes) {
        maPd.classList.remove('show');
        maGr.classList.add('show');
        prodes = false;
        graphic = true;
    }
}

function toggleUx() {
    console.log('ui/ux/web');
    if (graphic) {
        maGr.classList.remove('show');
        maUx.classList.add('show');
        graphic = false;
        uiuxweb = true;
    } else if (prodes) {
        maPd.classList.remove('show');
        maUx.classList.add('show');
        prodes = false;
        uiuxweb = true;
    }
}

function togglePd() {
    console.log('ui/ux/web');
    if (graphic) {
        maGr.classList.remove('show');
        maPd.classList.add('show');
        graphic = false;
        prodes = true;
    } else if (uiuxweb) {
        maUx.classList.remove('show');
        maPd.classList.add('show');
        uiuxweb = false;
        prodes = true;
    }
}

// function toggleWeb() {
//     console.log('web');
//     if (imP) {
//         // em.classList.remove('show');
//         imWeb.classList.add('show');
//         imP = false;
//         web = true;
//         console.log('web:' + web);
//         console.log('imP:' + imP);
//     } else if (game) {
//         imGd.classList.remove('show');
//         imWeb.classList.add('show');
//         game = false;
//         web = true;
//     } else {
//         imWeb.classList.remove('show');
//         web = false;
//         imP = true;
//     }
//     console.log('web:' + web);
//     console.log('gd:' + game);
//     console.log('imP:' + imP);
// }

// function toggleGd() {
//     console.log('game design');
//     if (imP) {
//         // em.classList.remove('show');
//         imGd.classList.add('show');
//         imP = false;
//         game = true;
//         console.log('web:' + web);
//         console.log('imP:' + imP);
//     } else if (web) {
//         imWeb.classList.remove('show');
//         imGd.classList.add('show');
//         game = true;
//         web = false;
//     } else {
//         imGd.classList.remove('show');
//         game = false;
//         imP = true;
//     }
//     console.log('web:' + web);
//     console.log('gd:' + game);
//     console.log('imP:' + imP);
// }