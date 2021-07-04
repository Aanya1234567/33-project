const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;
var background;
var bgImg,snow1,snow2,snowImg

function preload()
{
  bgImg=loadImage("snow3.jpg");
  snow1=loadImage("snow5.webp");
  snow2=loadImage("snow4.webp");
  
 }
function setup() {
 var canvas=createCanvas(1700,700)
engine=Engine.create()
world=engine.world
 
}
function draw() {
  background(bgImg);  
  drawSprites();
}
function snow(){
  if(World.frameCount%80===0){
  snow =createSprite(400,200,20,20);
  snow.scale=0.2;
  
  r=Math.round(random(1,4));
  if (r==1){
   snow.addImage(snow1);
  } else if (r==2){
    snow.addImage(snow2);
  }
  snow.y=Math.round(random(50,340));
 snow.velocityX=-7;
}
}
