var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car1Img, car2, car2Img;
var track;
var allPlayers; 
var cars=[];
var fuelImage,powerCoinImage,fuels,powerCoins;
var gameState;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage=loadImage("assets/fuel.png");
  powerCoinImage=loadImage("assets/goldCoin.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  if(playerCount===2){
game.update(1);
  }

  if(gameState===1){
game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}