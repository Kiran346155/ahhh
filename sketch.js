function preload(){
rocketimg=loadImage("rocketimg.png")
}
function setup() {
  createCanvas(800,400);
  Rocket1=new Rocket()
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
}