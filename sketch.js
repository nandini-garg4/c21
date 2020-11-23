var fixedRect, movingRect;
var object1;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  object1=createSprite(800,200,40,40)
  object1.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,object1)){
  object1.shapeColor="pink"
}
else{
  object1.shapeColor="yellow"
}
 if (isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

} 
else{

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
 drawSprites();
}
