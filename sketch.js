var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;
var car1,car2,car3,car4
var c1,c2,c3,c4,track
var cars 
var database;

var form, player, game;

function preload(){
c1=loadImage("images/car1.png")
c2=loadImage("images/car2.png")
c3=loadImage("images/car3.png")
c4=loadImage("images/car4.png")
track=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount===4){
game.update(1)

    
  } 
  if(gameState===1){

    game.play()
  }
  if(gameState===2){
    game.end()
  }
}
