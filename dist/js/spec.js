const abt = document.querySelector('.wrapper-main');
const imPage = document.querySelector('.wrapper-im');
const im = document.querySelector('.im-card');
const gd = document.querySelector('.gd-card');
const sa = document.querySelector('.sa-card');
const imTv = document.querySelector('.im-tv');
const eks = document.querySelector('.tab');
const imWeb = document.querySelector('.im-desc-web');
const imGd = document.querySelector('.im-desc-gd');
// const em = document.querySelector('im-desc-icons');
const a = document.querySelector('.a');
const b = document.querySelector('.b');


im.addEventListener('click', toggleIm);
eks.addEventListener('click', toggleClose);
a.addEventListener('click', toggleWeb);
b.addEventListener('click', toggleGd);

// let abtP = true;
let imP = false;
let web = false;
let game = false;
// let gdP = false;
// let saP = false;

function toggleIm() {
    console.log('clicked');
    console.log(abt);
    abt.classList.remove('show');
    imPage.classList.add('show');
    imTv.classList.add('show');

    imP = true;
    console.log(true);
}

function toggleClose() {

    console.log('closed');
    abt.classList.add('show');
    imPage.classList.remove('show');
    imTv.classList.remove('show');
    imP = true;
    web = false;
    game = false;

    // imP = false;
}

function toggleWeb() {
    console.log('web');
    if (imP) {
        // em.classList.remove('show');
        imWeb.classList.add('show');
        imP = false;
        web = true;
        console.log('web:' + web);
        console.log('imP:' + imP);
    } else if (game) {
        imGd.classList.remove('show');
        imWeb.classList.add('show');
        game = false;
        web = true;
    } else {
        imWeb.classList.remove('show');
        web = false;
        imP = true;
    }
    console.log('web:' + web);
    console.log('gd:' + game);
    console.log('imP:' + imP);
}

function toggleGd() {
    console.log('game design');
    if (imP) {
        // em.classList.remove('show');
        imGd.classList.add('show');
        imP = false;
        game = true;
        console.log('web:' + web);
        console.log('imP:' + imP);
    } else if (web) {
        imWeb.classList.remove('show');
        imGd.classList.add('show');
        game = true;
        web = false;
    } else {
        imGd.classList.remove('show');
        game = false;
        imP = true;
    }
    console.log('web:' + web);
    console.log('gd:' + game);
    console.log('imP:' + imP);
}