//ASSIGN ELEMENTS
const playground = document.querySelector('.playground');
const ball = document.querySelector('.beachball');
const dog = document.querySelector('.doggo');
const bork = document.querySelector('.bork');
const pet = document.querySelector('.pet');

let keep = false;
let note = false;
let pat = false;


//EVENT LISTENR TO PLAY WITH BALL
ball.addEventListener('click', playBall);
dog.addEventListener('mouseenter', headPats);
dog.addEventListener('click', headPats);
dog.addEventListener('mouseleave', headStops);

//MOVES BALL UNLESS NEAR DOGGO
function playBall(e) {
    //ASSIGN COORDINATES
    let circ = ball.getBoundingClientRect();
    let paw = dog.getBoundingClientRect();
    let x;
    let y;

    //CALCULATE POSITION
    let coorx = circ.left;
    let coory = circ.top;
    keep = keepBall(coorx, coory, paw.left, paw.top);
    //CALCULATE POSITION

    //CALCULATE MOVEMENT
    if (e.offsetX > 25) {
        x = e.offsetX * -1.5;
    } else {
        x = (50 - e.offsetX) * 1.5;
    }
    if (e.offsetY > 25) {
        y = e.offsetY * -1.5;
    } else {
        y = (50 - e.offsetY) * 1.5;
    }

    //CHANGE POSITION
    let movex = coorx + x;
    let movey = coory + y;

    if (keep && !note) {
        bork.classList.add('show');
        note = true;
        //bork.style.bjork;
    } else if (keep && note) {
        bork.classList.remove('show');
        note = false;
    } else {
        ball.style.left = movex + 'px ';
        ball.style.top = movey + 'px';
    }
}

function headPats() {
    if (!pat) {
        pet.classList.add('show');
    }
}

function headStops() {
    pet.classList.remove('show');
}

function keepBall(bx, by, dx, dy) {
    let x = dx - 80;
    let y = dy - 80;
    if (bx > dx && by > dy) {
        return true;
    } else {
        return false;
    }
}