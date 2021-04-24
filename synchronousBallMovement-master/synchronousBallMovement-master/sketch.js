var hypnoticBall, database;
var position;
var playerCount,gameState,form,player,game
var gameStateRef,playerCountRef
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()

  
}

function draw(){
  background("white");
  
 
    drawSprites();
  
}

