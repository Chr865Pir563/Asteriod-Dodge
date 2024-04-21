

//// Variablen definieren ////
// #spacecraft ansprechen und x-achese 
let spacecraft = document.querySelector('#spacecraft');
let x = 500; 
let y = 770;

//asteroiden deinieren - Array!
let asteroids = new Array(
    { x : 100, y : 5 },
    { x : 200, y : 20 },
    { x : 300, y : 10 },
    { x : 400, y : 30 },
    { x : 500, y : 10 },
    { x : 600, y : 40 },
    { x : 700, y : 50 },
    { x : 800, y : 10 },
    { x : 900, y : 20 }
);


// Intervallfunktion (fallende Asteroiden) - alle 50ms
let stepper = window.setInterval(moveAsteroids,50);


////Steuerung Raumschiff ////

//Positionsänderung Raumschiff x + y
spacecraft.style.left = x + 'px'
spacecraft.style.top = y + 'px'

document.onkeydown = function (e) {
    e = e || window.event;

    if (e.keyCode == 39) {
        x = x + 20;
    }

    if (e.keyCode == 37) {
        x = x - 20;
    }

    if (e.keyCode == 40) {
        y = y + 20;
    }

    if (e.keyCode == 38) {
          y = y - 20;
    }

    spacecraft.style.left = x + 'px';
    spacecraft.style.top = y + 'px'

}

function moveAsteroids () {
    for (let i = 0 ; i < asteroids.length; i++) {
        asteroids[ i ].y += ( i + 3 );
        displayAsteroid(i);

        if (asteroids[ i ].y >= 770) {
            detectCollison(i);
        }

        if (asteroids [ i ].y >=780) {
            rebirthAsteroid(i);
        }
    }

    
}

function rebirthAsteroid ( i ) {
    asteroids[ i ].y = 0;
    asteroids[ i ].y = Math.random() * 750;
    displayAsteroid(i);
}

function displayAsteroid ( i ) {
    let asteroid = document.querySelector('#asteroid' + i);
    asteroid.style.top = asteroids[ i ].y + 'px';
    asteroid.style.left = asteroids[ i ].x +'px';
}

function detectCollison( i ) {
    if (asteroids[ i ].x > x - 15 &&
        asteroids[ i ].x < x + 30) {
            window.clearInterval(stepper);
            alert('Game Over, alle sind gestorben')
        }
}










