// Variables
var canvas = document.getElementById('game'),
    w = window;
    ctx = canvas.getContext('2d'),

    // setup some background stuff
    guyReady = false,
    fireReady = false,
    bgImg = new Image(),
    guyImg = new Image(),
    fireImg = new Image(),
    start = true,

    // Game Objects
    guy = {
      speed: 150, // movement in pixels per second
      x: 0,
      y: 0
    },

    fire = {
      x: 0,
      y: 0
    },

    extinguish = 0, // score


    // Controls
    keyDown = {},


    // Reset game when guy extinguish fire
    reset = function () {
      if (start) {
        // place the guy in the center to start
        // and then keep him where he is upon new
        // fire spawn
        guy.x = canvas.width / 2;
        guy.y = canvas.height / 2;
        start = false;
      }

      // spawn the fire randomly on the canvas
      fire.x = 32 + (Math.random() * (canvas.width - 64));
      fire.y = 32 + (Math.random() * (canvas.height - 64))
    }




// Set up our game area
canvas.width = 512;
canvas.height = 480;


// Load images
guyImg.onload = function () {
  guyReady = true;
};

guyImg.src = 'img/guy.png';

fireImg.onload = function () {
  fireReady = true;
};

fireImg.src = 'img/fire.png';



// Listen for Controls
addEventListener('keydown', function ( e ) {
  keyDown[e.keyCode] = true;
}, false);

addEventListener('keyup', function ( e ) {
  delete keyDown[e.keyCode];
}, false);



function update ( modifier ) {
  if (38 in keyDown) { // up key
    guy.y = (guy.y > 0) ? (guy.y - guy.speed * modifier) : canvas.height - 32;
  }

  if (40 in keyDown) { //down key
    guy.y = (guy.y + guy.speed * modifier) % canvas.height;
  }

  if (37 in keyDown) { // left key
    guy.x = (guy.x > 0) ? (guy.x - guy.speed * modifier) : canvas.width - 32;
  }

  if (39 in keyDown) { // right key
    guy.x = (guy.x + guy.speed * modifier) % canvas.width;
  }

  // check for collisions
  if (
    guy.x <= (fire.x + 32)
    && fire.x <= (guy.x + 32)
    && guy.y <= (fire.y + 32)
    && fire.y <= (guy.y + 32)
  ) {
    ++extinguish;
    reset()
  }
}

// Draw the game
function render () {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (guyReady && fireReady) {
    ctx.drawImage(guyImg, guy.x, guy.y);
    ctx.drawImage(fireImg, fire.x, fire.y);
  }


  //score area
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.font = '24px arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Fires Extinguished:' + extinguish, 12, 12);
}


// main game loop
function main () {
  var now = Date.now(),
      delta = now - then;

      update(delta / 1000);
      render();

      then = now;

      // request to do again
      requestAnimationFrame(main);
}


requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();

reset();
main();
