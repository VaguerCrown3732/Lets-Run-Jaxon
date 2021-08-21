var Runner,Runner2;
var RunnerImg;
var power, path;
var energyDrink, bomb, coin;
var pathImg;

function preload()
{
  pathImg = loadImage("path.png");
  Runner1 = loadAnimation("Runner-1.png","Runner-2.png");
  coin = loadAnimation("coin.png");
}

function setup(){
  createCanvas(400,400);
  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4
path.scale=1.2;

Boundrie1 = createSprite(1,200,70,500);
Boundrie1.visible = false

Boundrie2 = createSprite(400,200,70,500);
Boundrie2.visible = false

Runner = createSprite(130,200,30,30);
Runner.addAnimation("running",Runner1);
Runner.scale = 0.1;
}
function draw(){
  background(0);
  Runner.bounceOff(Boundrie1)
  Runner.bounceOff(Boundrie2)
  if (keyDown(LEFT_ARROW)) {
    Runner.x=Runner.x-5
  }
  if (keyDown(RIGHT_ARROW)) {
    Runner.x=Runner.x+5
  }
  if(path.y > 400){
    path.y = height/2;
  }
  
  drawSprites();
}
