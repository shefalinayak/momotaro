/*
game.js
Shefali Nayak

The Legend of Momotaro: Interactive Version
pseudo-platformer retelling of the classic Japanese folktale
*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = 800;
var height = 600;
var player = {
  x : width/2,
  y : height - 5,
  width : 10,
  height : 10,
  speed: 3,
  velX: 0,
  velY: 0,
  jumping: false
};
var friction = 0.8;
var gravity = 0.2;
var keys = [];

canvas.width = width;
canvas.height = height;

// draw player.
ctx.fillStyle = "red";
ctx.fillRect(player.x, player.y, player.width, player.height);

// bind keyboard events to body
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

// setting up game loop
function setup() {
    var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
}

// rendering code
function update(){
  // update velocity according to keystrokes
  if (keys[38] || keys[32]) {
    // up arrow or space
    if (!player.jumping) {
      player.jumping = true;
      player.velY = -player.speed*2;
    }
  }
  if (keys[39]) {
    // right arrow
    if (player.velX < player.speed) {
      player.velX++;
    }
  }
  if (keys[37]) {
    // left arrow
    if (player.velX > -player.speed) {
      player.velX--;
    }
  }

  // account for friction
  player.velX *= friction;
  player.velY += gravity;

  // update position according to velocity
  player.x += player.velX;
  player.y += player.velY;

  // keep player within screen
  if (player.x >= width-player.width) {
    player.x = width-player.width;
  } else if (player.x <= 0) {
    player.x = 0;
  }
  if(player.y >= height-player.height){
    player.y = height - player.height;
    player.jumping = false;
  }

  // draw our player
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = "brown";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  // run through the loop again
  requestAnimationFrame(update);
}

setup();

window.addEventListener("load", function(){
  update();
});
