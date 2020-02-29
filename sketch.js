
var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
movingrect=createSprite(300,100,50,50);
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
movingrect.velocityY=-3;
fixedrect.velocityY=-3



}

function draw() {
  background("yellow") 
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;
 /*if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   movingrect.shapeColor="red";
   fixedrect.shapeColor="red";
  
}
else {movingrect.shapeColor="green"
fixedrect.shapeColor="green"
}*/
  
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.velocityX=fixedrect.velocityX*(-1);
    movingrect.velocityX=movingrect.velocityX*(-1);
  }

if( movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  fixedrect.velocityY=fixedrect.velocityY*(-1)
  movingrect.velocityY=movingrect.velocityY*(-1)}
drawSprites();

}