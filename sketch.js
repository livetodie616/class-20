var rect1,rect2;



function setup() {
  createCanvas(800,400);
  rect1=createSprite(600,100,50,50);
  rect1.shapeColor="red"
  rect1.debug=true
  rect2=createSprite(600,300,50,50);
  rect2.shapeColor="red"
  rect2.debug=true
  rect1.velocityY=2
  rect2.velocityY=-2
}

function draw() {
  background(0);  
  if(rect2.x-rect1.x<=rect2.width/2+rect1.width/2 &&
    rect1.x-rect2.x<=rect2.width/2+rect1.width/2 ){
      rect1.velocityX=rect1.velocityX*(-1)
      rect2.velocityX=rect2.velocityX*(-1)

    }
    if(rect2.y-rect1.y<=rect2.height/2+rect1.height/2 &&
      rect1.y-rect2.y<=rect2.height/2+rect1.height/2){
     rect1.velocityY=rect1.velocityY*(-1)
     rect2.velocityY=rect2.velocityY*(-1)

    }
  drawSprites();
}
