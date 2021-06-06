const abt = document.querySelector('.wrapper-main');
const imPage = document.querySelector('.wrapper-im');
const im = document.querySelector('.im-card');
const gd = document.querySelector('.gd-card');
const sa = document.querySelector('.sa-card');
const imTv = document.querySelector('.im-tv');
const eks = document.querySelector('.eks');

im.addEventListener('click', toggleIm);
eks.addEventListener('click', toggleClose);

// let abtP = true;
// let imP = false;
// let gdP = false;
// let saP = false;

function toggleIm() {
    console.log('clicked');
    console.log(abt);
    abt.classList.remove('show');
    imPage.classList.add('show');
    imTv.classList.add('show');
}

function toggleClose() {
    console.log('closed');
    abt.classList.add('show');
    imPage.classList.remove('show');
    imTv.classList.remove('show');
}