const abt = document.querySelector('.wrapper-main');
const imPage = document.querySelector('.wrapper-im');
const im = document.querySelector('.im-card');
const gd = document.querySelector('.gd-card');
const sa = document.querySelector('.sa-card');
const imTv = document.querySelector('.im-tv');
const eks = document.querySelector('.tab');
const em = document.querySelector('im-desc-icons');
const a = document.querySelector('.a');
const b = document.querySelector('.b');


im.addEventListener('click', toggleIm);
eks.addEventListener('click', toggleClose);
a.addEventListener('click', toggleWeb);

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
    imP = false;
    web = false;
    game = false;

    // imP = false;
}

function toggleWeb() {
    console.log('web');
    if (imP) {
        em.classList.remove('show');
        a.classList.add('show');
        imP = false;
        web = true;
    } else if (game) {
        b.classList.remove('show');
        a.classList.add('show');
        game = false;
        web = true;
    } else {
        web = true;
    }
}