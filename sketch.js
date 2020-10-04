var fixedRect, movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObj1 = createSprite(1000,600,40,40);
  gameObj2 = createSprite(300,600,50,50);
  gameObj3 = createSprite(500,200,70,70);
  gameObj4 = createSprite(500,500,30,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObj1.velocityX = -5
  gameObj2.velocityX = +5
  gameObj3.velocityY = +3
  gameObj4.velocityY = -3
}

function draw() {
  background(0,0,0);  

  bounceOff(gameObj1,gameObj2);
  bounceOff(gameObj3,gameObj4);
  bounceOff(fixedRect,movingRect);
  drawSprites();
}

function bounceOff(obj1,obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj1.velocityX = obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
  }
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
  obj1.velocityY = obj1.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
  }
}


