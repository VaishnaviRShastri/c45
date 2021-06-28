
var car;
var carImg;
var road,roadImg;
var obstacle,obstacleImg,obastacleGrp;
var gameState="Play";
var rand;
var barImg;

function preload(){
  carImg=loadImage("Car.png.png");
  roadImg=loadImage("track_img3.jpg");
  obstacleImg=loadImage("Cone.png");
  barImg=loadImage("barricade1.png");
}
function setup() {
  createCanvas(400, 600);
 

road=createSprite(350,200)
road.addImage("road",roadImg);
road.scale=2;


car =createSprite(130,550,10,20);
car.addImage("car",carImg);
car.scale=0.1;

obstacleGrp=new Group();
   
}

function draw() {
  background("black");  
  if(gameState==="Play"){

    road.velocityY=5;

    if(keyDown("left")){
      car.x=car.x-15;   
    }
    
    if(keyDown("right")){
      car.x=car.x+15;
    }
    if(road.y>380){
        road.y=height/2
    }
     
    spawnObstacle()

    if(obstacleGrp.isTouching(car)){
      road.velocityY=0;
      car.x=130;
      car.y=550;
      obstacleGrp.destroyEach();
      obstacleGrp.setVelocityYEach(0);
      gameState="End";

  }
  drawSprites();
  }

  if(gameState==="End"){
    background("black");
    fill("Yellow");
    textSize(30);
    text("Game Over", 150,300);
    textSize(24);
    text("Press Space To Restart",100,370);
    if(keyDown("Space")){
      gameState="Play";
    }
  }
  
  

  
  
  //car.velocityY=-5;
  
  
}

function spawnObstacle(){
    if(frameCount%60===0){
      obstacle=createSprite(Math.round(random(110,280),-20,10,10))
       //obstacle.addImage(obstacleImg);
      obstacle.velocityY=3;
      rand=Math.round(random(1,2))
      switch(rand){
        case 1 : obstacle.addImage(obstacleImg)
        obstacle.scale=0.2;
        break;
        case 2 : obstacle.addImage(barImg)
        obstacle.scale=0.2;
        break;
        
      }
    
    obstacle.lifetime=200
    obstacleGrp.add(obstacle)
     }
}