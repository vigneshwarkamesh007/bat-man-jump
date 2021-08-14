var PLAY = 1;
var END = 0;
var gameState = PLAY;
var batman,batmanImage
var coin,coinImage
var skull,skullImage
var coinsGroup 
var skullsGroup
var score=0
var joker

 
function preload() {
    batmanImage=loadImage("batman_image.png")
    coinImage=loadImage("coin_image.png")
    skullImage=loadImage("skull_image.jpg")
    bgImage=loadImage("background.png")
    jokerImage=loadImage("joker_image.jpg")

}
function setup() {
    createCanvas(displayWidth,750)
    bg=createSprite(400,400,displayWidth,750)
    bg.addImage(bgImage)
    bg.scale=5

    batman=createSprite(100,530,50,50)
     batman.addImage(batmanImage)
     batman.scale=0.3
     
     coinsGroup= new Group();
     skullsGroup= new Group();

    edges=createEdgeSprites()


}
function draw() {
    background("gold")
   

   
   
    if (gameState===PLAY){
      
      spawncoins();
      spawnskulls();
      if(keyDown("space") && batman.y >= 159) {
        batman.velocityY = -12;
      }
      batman.velocityY = batman.velocityY + 0.8
      batman.collide(edges)
      bg.velocityX=-1
      if (bg.x < 0){
        bg.x = bg.width/2;
      }
      if(skullsGroup.isTouching(batman)){
        skullsGroup.destroyEach()
      gameState=END
        
      }
       
   if(coinsGroup.isTouching(batman)){
    coinsGroup.destroyEach()
    score=score+2
   }
   drawSprites();
   fill("red")
      textSize(30)
      text("press space to collect dollar coin",700,100)
      text("SCORE: "+score,800,70)

    }
 if (gameState===END){
   
   //var joker=createSprite(displayWidth,displayHeight,50,50)
   //joker.addImage(jokerImage)
   background(jokerImage)
   textSize(70)
   fill("red")
   text("G A M E O V E R",650,250)
   text("SCORE: "+score,800,70)
   text("press R to restart",740,750)
 }

 if (keyDown("r") && gameState === END)
     { gameState = PLAY;
       score = 0;
       }
 
}
function spawncoins() {
    //write code here to spawn the clouds
    if (frameCount % 200 === 0) {
      var coin = createSprite(600,120,40,10);
      coin.y = Math.round(random(80,120));
      coin.addImage(coinImage);
      coin.scale = 0.07;
      coin.velocityX = -3;
      
       //assign lifetime to the variable
      coin.lifetime = 200;
      
      //adjust the depth
      coin.depth = batman.depth;
      batman.depth = batman.depth + 1;
      
      //add each cloud to the group
      coinsGroup.add(coin);
    }
    
  }
  function spawnskulls() {
    //write code here to spawn the clouds
    if (frameCount % 400 === 50) {
      var skull = createSprite(600,120,40,10);
      skull.y = Math.round(random(80,120));
      skull.addImage(skullImage);
      skull.scale = 0.07;
      skull.velocityX = -3;
      
       //assign lifetime to the variable
      skull.lifetime = 200;
      
      //adjust the depth
      skull.depth = batman.depth;
      batman.depth = batman.depth + 1;
      
      //add each cloud to the group
      skullsGroup.add(skull);
    }
    
  }


                   