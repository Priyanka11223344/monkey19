var banana ,bananaImage,bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var monkey , monkey_running;
var invisibleground;  
var boundary;
var score = 0;
var backgroundImage;   
var backround;
var gamestate = 1;
var PLAY = 1;
var END = 0;


function preload() {
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage     = loadImage("banana.png"  );
  obstacleImage   = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg"  );
}

function setup() {
  
  backround = createSprite(5,200,10,10);
  backround.addImage(backgroundImage);
  backround.scale = 0.9;
  backround.velocityX = -5;
  
  ground = createSprite (150,390,500,20);
  ground.velocityX = 5;
  ground.x = ground.width/2; 
  
  invisibleground = createSprite(150,5,500,10);
  invisibleground.visible = false;
  
  boundary = createSprite(150,380,500,10);
  boundary.visible = false;
  
  monkey = createSprite(50,320,5,5);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group ();
  obstacleGroup = new Group();
}

function draw() {
  background(0);
  

 if((gamestate === PLAY)){
   if(backround.x < 0) {
  backround.x = backround.width/2;
  } 
  console.log(ground.x);
  
  ground.visible = false;
  
  monkey.collide(boundary);
  
  if(monkey.collide(invisibleground)){
  monkey.velocityY = 15;
  
  }
  if(keyDown ( "space") ){     
  monkey.velocityY = -15;  
  monkey.collide(ground);
  }
   if(score === 10){
    monkey.scale = 0.1;
   }
   if(score === 20){
    monkey.scale = 0.2;
   }
   if(score === 30){
    monkey.scale = 0.2;
   }
   if(score === 40){
    monkey.scale = 0.2;
   }
   if(score === 50){
    monkey.scale = 0.2;
   }
   if(score === 60){
    monkey.scale = 0.2;
   }
   if(score === 70){
    monkey.scale = 0.2;
   }
   if(score === 80){
    monkey.scale = 0.2;
   }
   if(score === 90){
    monkey.scale = 0.2;
   }
   if(score === 100){
    monkey.scale = 0.2;
   }
   if(score === 200){
     monkey.scale = 0.2;
   }
   if(score === 300){
     monkey.scale = 0.2;
   }
   if(score === 400){
    monkey.scale = 0.2;
   }
   if(score === 500){
    monkey.scale = 0.2;
   }
   if(score === 600){
    monkey.scale = 0.2;
   }
   if(score === 700){
    monkey.scale = 0.2;
   }
   if(score === 800){
    monkey.scale = 0.2;
   }
   if(score === 900){
    monkey.scale = 0.2;
   }
   if(score === 1000){
    monkey.scale = 0.2;
   }
   if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
   }
  Banana();
  Obstacles();
}
  drawSprites();
  text("score:" + score,300,50);
  score = score+1;
}

function Banana() {
  if(frameCount % 50 === 0){
    banana = createSprite(300,100,5,5);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(50,250));
    banana.velocityX = -5;
    bananaGroup.add(banana);
    banana.lifetime = 50;
    if(banana.isTouching(monkey)){
  score = score +2;
  bananaGroup.destroyEach(banana);
  }
  }
  } 

function Obstacles()  {
  if(frameCount % 300  === 0){
  obstacle = createSprite(300,360,5,5);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2; 
  obstacle.velocityX = -7;
  obstacleGroup.add(obstacle);
  }
}
