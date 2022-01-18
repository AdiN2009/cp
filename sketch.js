
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var back,Back;
var hero,Hero;

function preload(){
back = loadImage("background.png");
hero = loadImage("superhero.png")
}


function setup() {
  createCanvas(1000,500);
 Hero = createSprite(250,250,40,40);
 Hero  = addImage(hero)
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(back);
  Engine.update(engine);
  
}

