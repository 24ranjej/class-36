var gameState = 0;
var playerCount;
var database;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game()
  game.gameState()
  game.start()
}

function draw(){
  
}
