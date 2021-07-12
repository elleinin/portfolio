// INTERACTIVE MEDIA
//------------------------------
//------------------------------

// GAMEPAD
//------------------------------
const left = document.querySelector('.left');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const right = document.querySelector('.right');
const gpa = document.querySelector('.a');
const gpb = document.querySelector('.b');
//---
// INFORMATION
//------------------------------
const gsmain = document.querySelector('.gamescreen-info-im');
const gsweb = document.querySelector('.gamescreen-info-web');
const gsgd = document.querySelector('.gamescreen-info-gd');
const gsdg = document.querySelector('.gamescreen-info-dg');
const text = [gsmain, gsweb, gsgd, gsdg];
const tools = document.querySelector('.toolselection');
//FRONTEND
const btnfrontend = document.querySelector('.frontend');
const wpfrontend = document.querySelector('.wp-frontend');
// let frontend = false;
//UIUX
const btnuiux = document.querySelector('.uiux');
const wpuiux = document.querySelector('.wp-uiux');
// let uiux = false;
//API
const btnapi = document.querySelector('.api');
const wpapi = document.querySelector('.wp-api');
// let api = false;
//DATAVIS
const btndatavis = document.querySelector('.datavis');
const wpdatavis = document.querySelector('.wp-datavis');
// let datavis = false;
//---
let wp = [true, false, false, false]
const wpbtn = [btnfrontend, btnuiux, btnapi, btndatavis];
const wpinfo = [wpfrontend, wpuiux, wpapi, wpdatavis];
//---
// SELECTION
//------------------------------
// let immain = true; //MAIN
let catalog = true;
// let gameselection = false;
const web = document.querySelector('.web');
const game = document.querySelector('.game');
const dog = document.querySelector('.dog');
let icon = [true, false, false, false];
const games = [0, web, game, dog];
//------------------------------
//------------------------------


//---
// EVENT LISTENERS
//------------------------------
up.addEventListener('click', toggleUp);
down.addEventListener('click', toggleUp);
left.addEventListener('click', toggleLeft);
right.addEventListener('click', toggleRight);
gpa.addEventListener('click', toggleA);
gpb.addEventListener('click', toggleB);
//---
//KEYBOARD EVENTS
//------------------------------
document.addEventListener('keydown', function(event) {
    console.log('keys');
    if (event.key === 'w' || event.key === 's' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        toggleUp();
        console.log('up');
    }
    if (event.key === 'a' || event.key === 'ArrowLeft') {
        toggleLeft();
        console.log('left');
    }
    if (event.key === 'd' || event.key === 'ArrowRight') {
        toggleRight();
        console.log('right');
    }
    if (event.key === 'Delete' || event.key === 'Backspace' || event.key === 'Escape') {
        toggleB();
        console.log('b');
    }
    if (event.key === 'Enter') {
        toggleA();
        console.log('a');
    }
});
//---
//ONCLICK EVENTS
//------------------------------
web.addEventListener('click', function() {
    toggleSelect(1, 1);
});
game.addEventListener('click', function() {
    toggleSelect(1, 2);
});
dog.addEventListener('click', function() {
    toggleSelect(1, 3);
});
btnfrontend.addEventListener('click', function() {
    toggleSelect(0, 0);
});
btnuiux.addEventListener('click', function() {
    toggleSelect(0, 1);
});
btnapi.addEventListener('click', function() {
    toggleSelect(0, 2);
});
btndatavis.addEventListener('click', function() {
    toggleSelect(0, 3);
});
//------------------------------
//------------------------------

function toggleLeft() {
    console.log('left');
    if (catalog) {
        if (icon[0]) {
            dog.classList.add('current');
            dog.classList.add('cursor');
            gsdg.classList.add('show');
            gsmain.classList.remove('show');
            tools.classList.remove('show');
            icon[0] = false;
            icon[3] = true
            console.log("immain: " + immain);
            console.log("dg: " + dg);
        } else if (icon[1]) {
            rotateGame(3, 1);
        } else if (icon[2]) {
            rotateGame(1, 2);
        } else {
            rotateGame(2, 3);
        }
    } else {
        if (wp[0]) {
            rotateWP(3, 0);
        } else if (wp[1]) {
            rotateWP(0, 1);
        } else if (wp[2]) {
            rotateWP(1, 2);
        } else {
            rotateWP(2, 3);
        }
    }

}

function toggleRight() {
    console.log('right');
    if (catalog) {
        if (icon[0]) {
            web.classList.add('current');
            web.classList.add('cursor');
            gsweb.classList.add('show');
            gsmain.classList.remove('show');
            tools.classList.remove('show');
            icon[0] = false;
            icon[1] = true
        } else if (icon[1]) {
            rotateGame(2, 1);
        } else if (icon[2]) {
            rotateGame(3, 2);
        } else {
            rotateGame(1, 3);
        }
    } else {
        if (wp[0]) {
            rotateWP(1, 0);
        } else if (wp[1]) {
            rotateWP(2, 1);
        } else if (wp[2]) {
            rotateWP(3, 2);
        } else {
            rotateWP(0, 3);
        }
    }
}

function toggleUp() {
    console.log('up');
    if (icon[1]) {
        if (catalog) {
            for (let i = 0; i < 4; i++) {
                if (wp[i]) {
                    games[1].classList.remove('cursor');
                    wpbtn[i].classList.add('cursor');
                    catalog = false;
                }
            }
        } else {
            for (let i = 0; i < 4; i++) {
                if (wp[i]) {
                    wpbtn[i].classList.remove('cursor');
                    games[1].classList.add('cursor');
                    catalog = true;
                }
            }
        }
    } else {
        console.log('no-toggle');
    }
}

function rotateWP(show, hide) {
    console.log('rotate');
    wpbtn[show].classList.add('current');
    wpbtn[show].classList.add('cursor');
    wpinfo[show].classList.add('show');
    wpbtn[hide].classList.remove('current');
    wpbtn[hide].classList.remove('cursor');
    wpinfo[hide].classList.remove('show');
    wp[show] = true;
    wp[hide] = false;
}

function rotateGame(show, hide) {
    console.log('rotate');
    console.log("hide:" + hide);
    console.log("show:" + show);
    console.log(icon[show]);
    text[show].classList.add('show');
    games[show].classList.add('current');
    games[show].classList.add('cursor');
    text[hide].classList.remove('show');
    games[hide].classList.remove('current');
    games[hide].classList.remove('cursor');
    icon[show] = true;
    icon[hide] = false;
}

function toggleB() {
    console.log('b');
    if (icon[0]) {
        var delay = 1000;
        document.querySelector('.backdrop').classList.add('out');
        console.log('redirect');

        setTimeout(function() {
            window.location = "about.html";
        }, delay);
    } else if (catalog) {
        for (let i = 0; i < 4; i++) {
            if (icon[i]) {
                games[i].classList.remove('cursor');
                games[i].classList.remove('current');
                text[i].classList.remove('show');
                text[0].classList.add('show');
                icon[i] = false;
                icon[0] = true;
            }
        }
    } else {
        for (let i = 0; i < 4; i++) {
            if (wp[i]) {
                //remove web prog contents
                wpbtn[i].classList.remove('cursor');
                wpbtn[i].classList.remove('current');
                wpinfo[i].classList.remove('show');
                wp[i] = false;
                //remove web prog selection
                gsweb.classList.remove('show');
                web.classList.remove('current');
                //restart web prog info
                wpbtn[0].classList.add('current');
                wpbtn[0].classList.add('cursor');
                wpinfo[0].classList.add('show');
                wp[0] = true;
                //show IM info
                text[0].classList.add('show');
                //im true, web false
                icon[1] = false;
                icon[0] = true;
            }

        }
    }
    catalog = true;
}

function toggleSelect(prev, id) {
    console.log('select');
    if (icon[0]) {
        games[id].classList.add('current');
        games[id].classList.add('cursor');
        text[id].classList.add('show');
        text[0].classList.remove('show');
        icon[0] = false;
        icon[id] = true;
    } else {
        //if icon[1]
        //
        xSelected(prev);
        if (prev) {
            games[id].classList.add('current');
            games[id].classList.add('cursor');
            text[id].classList.add('show');
            icon[id] = true;
            catalog = true;
        } else {
            wpbtn[id].classList.add('current');
            wpbtn[id].classList.add('cursor');
            wpinfo[id].classList.add('show');
            wp[id] = true;
            catalog = false;
        }
    }
}

function xSelected(prev) {
    console.log('eks');
    if (catalog) { //if cursor is on a game item
        if (prev) { //if game item is clicked
            for (let i = 0; i < 4; i++) { //through icons
                if (icon[i]) {
                    games[i].classList.remove('cursor');
                    games[i].classList.remove('current');
                    text[i].classList.remove('show');
                    icon[i] = false;
                }
            }
        } else { //if wp item is clicked
            games[1].classList.remove('cursor');
            for (let i = 0; i < 4; i++) { //through icons
                if (wp[i]) {
                    wpbtn[i].classList.remove('current');
                    wpinfo[i].classList.remove('show');
                    wp[i] = false;
                }
            }
        }
    } else { //if cursor is on a wp item
        if (prev) { //if game item is clicked
            for (let i = 0; i < 4; i++) { //through wp
                if (wp[i]) {
                    wpbtn[i].classList.remove('cursor');
                    //wpinfo[i].classList.remove('show');
                }
            }
            games[1].classList.remove('current');
            text[1].classList.remove('show');
        } else { //if wp item is clicked
            for (let i = 0; i < 4; i++) { //through wp
                if (wp[i]) {
                    wpbtn[i].classList.remove('cursor');
                    wpbtn[i].classList.remove('current');
                    wpinfo[i].classList.remove('show');
                    wp[i] = false;
                }
            }
        }
    }
}

function toggleA() {
    if (icon[3]) {
        window.location.href = 'redirect.html';
    }
}


// function gameselect() {
//     for (let i = 0; i < 4; i++) {
//         if (icon[i] == true) {
//             if (imain) {
//                 games[3 - i].classList.add('current');
//                 games[3 - i].classList.add('cursor');
//                 text[3 - i].classList.add('show');
//                 text[i].classList.remove('show');
//             } else {
//                 games[3 - i].classList.add('current');
//                 games[3 - i].classList.add('cursor');
//                 text[3 - i].classList.add('show');
//                 text[i].classList.remove('show');
//             }
//         }
//     }
// }

// function toggleUp() {
//     if (immain) {
//         console.log("up-main");
//     } else if (wpselection) {
//         console.log("up-wp-selection");
//     } else {
//         wpselection = true;
//         console.log("toggle wp selection");
//     }
// }

// function toggleDown() {
//     if (immain) {
//         console.log("down-main");
//     } else if (gameselection) {
//         console.log("down-game-selection");
//     } else {
//         gameselection = true;
//         wpselection = false;
//         wp = true;
//         console.log("toggle game selection");
//     }
// }

// function toggleLeft() {
//     if (wpselection) {
//         if (frontend) {
//             datavis = true;
//             frontend = false;
//             console.log("wpFinder");
//         } else if (uiux) {
//             frontend = true;
//             uiux = false;
//             console.log("wpFinder");
//         } else if (api) {
//             uiux = true;
//             api = false;
//             console.log("wpFinder");
//         } else {
//             api = true;
//             datavis = false;
//             console.log("wpFinder");
//         }
//     } else {
//         if (gd) {
//             console.log("gameFinder line 1");
//             gameFinder('web', 'game');
//         } else if (dg) {
//             gameFinder('game', 'dog');
//             console.log("gameFinder line 2");
//         } else if (wp) {
//             gameFinder('dog', 'web');
//             console.log("gameFinder line 3");
//         } else {
//             dog.classList.add('current');
//             gsdg.classList.add('show');
//             dg = true;
//             gameselection = true;
//             immain = false
//             console.log('on-dog');
//             console.log(dg);
//         }
//     }
// }

// function toggleRight() {
//     if (wpselection) {
//         if (frontend) {
//             uiux = true;
//             frontend = false;
//             console.log("wpFinder");
//         } else if (uiux) {
//             api = true;
//             uiux = false;
//             console.log("wpFinder");
//         } else if (api) {
//             datavis = true;
//             api = false;
//             console.log("wpFinder");
//         } else {
//             frontend = true;
//             datavis = false;
//             console.log("wpFinder");
//         }
//     } else {
//         if (wp) {
//             gd = true;
//             wp = false;
//             console.log("gameFinder");
//         } else if (gd) {
//             dg = true;
//             gd = false;
//             console.log("gameFinder");
//         } else {
//             wpselection = true;
//             wp = true;
//             dg = false;
//             console.log("gameFinder");
//         }
//     }
// }

// function gameFinder(on, off) {
//     console.log(on);
//     console.log(off);
//     if (on == 'web') {
//         gsweb.classList.add('show');
//         web.classList.add('current');
//         wp = true;
//         console.log('on-web');
//     } else if (on == 'game') {
//         gsgd.classList.add('show');
//         game.classList.add('current');
//         gd = true;
//         console.log('on-game');
//     } else if (on == 'dog') {
//         gsdg.classList.add('show');
//         dog.classList.add('current');
//         dg = true;
//         console.log('on-dog');
//     }
//     if (off == 'web') {
//         gsweb.classList.remove('show');
//         web.classList.remove('current');
//         wp = false;
//         console.log('off-web');
//     } else if (off == 'game') {
//         gsgd.classList.remove('show');
//         game.classList.remove('current');
//         gd = false;
//         console.log('off-game');
//     } else if (off == 'dog') {
//         gsdg.classList.remove('show');
//         dog.classList.remove('current');
//         dg = false;
//         console.log('off-dog');
//     }
// }

// function wpFinder(on, off) {
//     if (on = frontend) {
//         wpfrontend.classList.add('show');
//         btnfrontend.classList.add('current');
//         frontend = true;
//     } else if (on = uiux) {
//         wpuiux.classList.add('show');
//         btnuiux.classList.add('current');
//         uiux = true;
//     } else if (on = api) {
//         wpapi.classList.add('show');
//         btnapi.classList.add('current');
//         api = true;
//     } else if (on = datavis) {
//         wpdatavis.classList.add('show');
//         btndatavis.classList.add('current');
//         datavis = true;
//     }
//     if (off = frontend) {
//         wpfrontend.classList.remove('show');
//         btnfrontend.classList.remove('current');
//         frontend = false;
//     } else if (off = uiux) {
//         wpuiux.classList.remove('show');
//         btnuiux.classList.remove('current');
//         uiux = false;
//     } else if (off = api) {
//         wpapi.classList.remove('show');
//         btnapi.classList.remove('current');
//         api = false;
//     } else if (off = datavis) {
//         wpdatavis.classList.remove('show');
//         btndatavis.classList.remove('current');
//         datavis = false;
//     }
// }

// function wpReset() {
//     if (frontend) {
//         btnfrontend.classList.remove('current');
//         wpfrontend.classList.remove('current');
//         frontend = false;
//     } else if (uiux) {
//         btnuxui.classList.remove('current');
//         wpuxui.classList.remove('current');
//         uiux = false;
//     } else if (api) {
//         btnapi.classList.remove('current');
//         wpapi.classList.remove('current');
//         api = false;
//     } else if (datavis) {
//         btndatavis.classList.remove('current');
//         wpdatavis.classList.remove('current');
//         datavis = false;
//     }
// }