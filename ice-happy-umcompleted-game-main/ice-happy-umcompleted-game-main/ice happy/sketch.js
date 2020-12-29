//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//var engine, world;
var coin, coinImg, fish, fishImg, iceblock, iceblockImg, icicle, icicleImg, obstacle, obstacleImg;
var penguin;
var penguinjump;
var penguinwalk;
var backgroundImg,platform;
var ground;
var invground;
var climberGroup;

function preload() {
    backgroundImg = loadImage("images/bg.PNG");
    penguinjump=loadImage("images/penguinjump.png");
    penguinwalk=loadImage("images/penguinwalk.png");
    coinImg=loadImage("images/coin.png");
    fishImg=loadImage("images/fish.png");
    iceblockImg=loadImage("images/iceblock.png");
    icicleImg=loadImage("images/icicle.png");
    obstacleImg=loadImage("images/obstacle.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-50, displayHeight-100);
    ground = createSprite(1000,300,700,40)
    ground.addImage(backgroundImg)
    ground.velocityX=-9;
    ground.scale=1.4
    invground = createSprite(660, displayHeight-100,displayWidth,20)
    //engine = Engine.create();
    //world = engine.world;
    
   
    //penguinjump=createSprite(150,100,50,200);
    //penguinjump.addImage(penguinjump);
    penguin=createSprite(150, displayHeight-150,50,100);
    penguin.addImage(penguinwalk);
   
    climberGroup = new Group()
   

}

function draw(){
    background("blue");
    if(ground.x<0){
       ground.x=ground.width/2
    }

   // Engine.update(engine);
    if (keyDown("space")) {
        penguin.velocityY=-5
    }
    penguin.velocityY=penguin.velocityY+0.5

if(keyDown(RIGHT_ARROW)){
  penguin.x=penguin.x+3
}

if (keyDown(LEFT_ARROW)){
 penguin.x=penguin.x-3
}

    spawnClimbers();
    spawnIcicle();
    spawnFishes();
    penguin.collide(invground);

   if(penguin.isTouching(climberGroup)){
    penguin.velocityX=0;
    penguin.velocityY=0;
   }
    drawSprites();
}

function spawnClimbers() {
    if (frameCount%150===0) {
        climber=createSprite(200,100,50,20);
        climber.addImage(iceblockImg);
        climber.scale=0.7
       climberGroup.add(climber);
        
        climber.y=random(displayHeight-800,displayHeight/2);
        climber.debug=true
    }
}
function spawnIcicle() {
    if (frameCount%200===0) {
        icicle=createSprite(200,100,50,20);
        icicle.addImage(icicleImg);
        icicle.scale=0.3;
        icicle.velocityY=9;
        
        icicle.y=random(displayHeight-1000,displayHeight-800);
    }
}
function spawnFishes() {
    if (frameCount%150===0) {
       fish=createSprite(200,100,50,20);
        fish.addImage(fishImg);
        fish.scale=0.7
       
        
        fish.y=random(displayHeight-800,displayHeight/2+400);
       
    }
}