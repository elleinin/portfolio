const playground = document.querySelector('.playground');
const ball = document.querySelector('.beachball');
const dog = document.querySelector('.doggo');
//const businessCard = document.querySelector('.card');

ball.addEventListener('click', playBall);

function playBall(e) {
    //ASSIGN COORDINATES
    //let box = playground.getBoundingClientRect();
    let circ = ball.getBoundingClientRect();
    let paw = dog.getBoundingClientRect();
    //console.log('BALL COORDS: ' + circ.top + ', ' + circ.left);
    let x;
    let y;
    let keep = false;
    var bork = document.querySelector('.bork');
    //let move = '(' + e.offsetX + 'px, ' + e.offsetY + 'px)';
    //let ptop = box.top + "px";
    //let pleft = box.left + "px";
    //let pbot = box.bottom + "px";
    //let pright = box.bottom + "px";



    //document.querySelector('.beachball').style.transform = 'translate' + move;

    //CALCULATE POSITION
    let coorx = circ.left;
    let coory = circ.top;
    //console.log('BALL COORDS WITHIN BOX: ' + coorx + ', ' + coory)
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

    //let move = '(' + x + 'px, ' + y + 'px)';

    //ball.style.transform = 'translate' + move;
    //circ = ball.getBoundingClientRect();
    //console.log(circ.top + ', ' + circ.left);
    //console.log(e.offsetX + ', ' + e.offsetY);
    //console.log(move);

    //CHANGE POSITION
    let movex = coorx + x;
    let movey = coory + y;

    console.log(keep);

    if (keep == true) {
        bork.innerHTML = '<p>Doggo would like to keep the ball. Thank you! :) </p>';
        //bork.style.bjork;
    } else {
        ball.style.left = movex + 'px ';
        ball.style.top = movey + 'px';
    }


    //CHANGE POSITION

    //CALCULATE POSITION
    //coorx = circ.left - box.left;
    //coory = circ.top - box.top;
    //console.log('NEW BALL COORDS WITHIN BOX:' + coorx + ', ' + coory)
    //CALCULATE POSITION

    //DOG WOULD LIKE TO KEEP THE BALL


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