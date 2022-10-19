class Game {
  constructor() {

    this.leadeboardTitle = createElement("h2"); 
    this.leader1 = createElement("h2"); 
    this.leader2 = createElement("h2");

  this.resetTitle=createElement()
    this.resetButton=createButton("")
}

  getState() { var gameStateRef = database.ref("gameState");
   gameStateRef.on("value", function(data) { 
    gameState = data.val(); }); }
  
  
  
  
  update(state) { 
   database.ref("/").update({
   gameState: state }); }




  start() {
    // INCLUA A CLASSE DO JOGO
    player = new Player();
playerCount=player.getCount();
    form = new Form();
    form.display();

car1 = createSprite(width / 2 - 50, height - 50);
 car1.addImage("car1", car1Img); car1.scale = 0.07;

 car2 = createSprite(width / 2 + 100, height - 50);
 car2.addImage("car2", car2Img); car2.scale = 0.07
    
  

  cars = [car1, car2];

  fuels=new Group();
  
  powerCoins= new Group();

  this.addSprites(fuels,4,fuelImage,0.02);
  this.addSprites(powerCoins,19,powerCoinImage,0.09);

  
  }
  addSprites(spriteGroup,numberOfsprites,spriteImage,scale){
    for (var i = 0; i < numberOfsprites; i++) { 
      var x, y; x = random(width / 2 + 150, width / 2 - 150);
     y = random(-height * 4.5, height - 400);} 
     var sprite = createSprite(x, y);
     sprite.addImage("sprite", spriteImage);
     sprite.scale = scale; spriteGroup.add(sprite);
     spriteGroup.add(sprite);
    }

  play(){

  this.handleElements();

  Player.getPlayersInfo();

if(allPlayers !== undefined){
image(track,0,-height*5,width,height*6);

var index = 0
 for (var plr in allPlayers){
 index = index + 1;
 var x = allPlayers[plr].positionX; 
 var y = height-allPlayers[plr].positionY; 
cars[index-1].position.x = x;
 cars[index-1].position.y = y;
 if (index === player.index){ //para identificar o jogador ativo na janela
   stroke(10);
    fill("red");
     ellipse(x,y,60,60);
   this.handleFuels(index);
this.handlepowerCoins(index);

camera.position.x = cars[index-1].position.x;
camera.position.y = cars[index-1].position.y;


 }
}

}
if(keyIsDown(UP_ARROW)){ 
  player.positionY +=10;
   player.update();
}
this.handlePlayerControls()






  }
handleElements(){



 this.leadeboardTitle.html("Placar");
 this.leadeboardTitle.class("resetText");
 this.leadeboardTitle.position(width / 3 - 60, 40);


this.leader1.class("leadersText"); 
this.leader1.position(width / 3 - 50, 80);


this.leader2.class("leadersText"); 
this.leader2.position(width / 3 - 50, 130);


  form.hide();
 form.titleImg.position(40, 50);
 form.titleImg.class("gameTitleAfterEffect");
this.resetTitle.html("reiniciar o jogo");
this.resetTitle.class("resetText ");
this.resetTitle.position(width/2+200,40);

this.resetButton.class("resetButton");
this.resetButton.position(width/2+230,100);
}



  handleFuels(index){
  cars[index - 1].overlap(fuels, function (collector, collected) {
  player.fuel = 185;
  collected.remove(); });

  }

  handlepowerCoins(index){
    cars[index - 1].overlap(powerCoins, function (collector, collected) { 
      player.score += 21; 
      player.update(); 
      collected.remove(); });
      
    }


      handleResetButton(){
this.resetButton.mousePressed(()=>{
database.ref("/").set({
gameState:0,
playerCount:0,
players:{}
});
window.location.reload();

      })
    }
handlePlayerControls(){
if(keyIsDown(UP_ARROW)){
//this.playerMoving = true;
 player.positionY +=10; player.update(); }

if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) { 
//  this.leftKeyActive = false 
player.positionX += 5;
player.update(); }

if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) { 
// this.leftKeyActive = true
 player.positionX -= 5; player.update(); }

  }
  showLeaderboard(){
    var leader1, leader2;
     var players = Object.values(allPlayers);

     if ( (players[0].rank === 0 && players[1].rank === 0) || players[0].rank === 1 ) {

      leader1 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + players[0].score;
      leader2 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + players[1].score; 

    }

     if (players[1].rank === 1) {
        leader1 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + players[1].score; 
     leader2 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + players[0].score; }

     this.leader1.html(leader1); this.leader2.html(leader2);
    
    }
  }