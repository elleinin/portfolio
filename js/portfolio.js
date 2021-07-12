const topnav = document.querySelector('.mininav');
const sec = document.getElementById('web');
const mma = document.getElementById('mma');
const ill = document.getElementById('ill');
const port = document.querySelector('#top .wrapper.body');
// const landing = document.getElementById('top');
// const mma = document.getElementById('mma');

// let show = false;

sec.addEventListener('mouseover', function() {
    navi();
});
mma.addEventListener('mouseover', function() {
    navi();
});
ill.addEventListener('mouseover', function() {
    navi();
});
port.addEventListener('mouseover', function() {
    rnavi();
});

// sec.addEventListener('mouseover', function() {
//     navi(sec);
// });
// mma.addEventListener('mouseover', function() {
//     navi(sec);
// });
// top.addEventListener('mouseover', function() {
//     navi(landing);
// });


// function navi(c) {
//     console.log('active');
//     if (c === sec && !show) {
//         topnav.classList.add('show');
//         show = true;

//     } else if (c === landing && show) {
//         topnav.classList.remove('show');
//         show = false;
//     }
//     console.log(show);
// }

function navi() {
    topnav.classList.add('show');
}

function rnavi() {
    topnav.classList.remove('show');
    console.log('why');
}