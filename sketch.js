var car,carimage 
var track,trackimage

function preload(){
  carimage=loadImage("Images/hub.png")
  trackimage=loadImage("Images/track.jpg")
}

function setup() {
  createCanvas(1200,1200);
  track=createSprite(500,500,50,50)
  track.addImage(trackimage)
  track.y=track.height/2
  
  car=createSprite(500,1000,20,20)
  car.addImage(carimage)
  car.scale=0.3
 
 

}






function draw() {
  background(255,255,255);
   if(keyDown(UP_ARROW)){
    // car.velocityY=-3
    track.velocityY+=3
   }
   if (keyDown(DOWN_ARROW)){
     car.velocityY=3
   }
   if (keyDown(RIGHT_ARROW)){
     car.velocityX=3
   }
   if (keyDown(LEFT_ARROW)){
    car.velocityX=-3
  }
   if (track.y < 0){
    track.y = track.width/2;
  }
  drawSprites();
}