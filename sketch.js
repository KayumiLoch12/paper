
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var box1, box2, box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,680, 800,20);
  paperBall = new PaperBall(40,60, 8,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  paperBall.display();

  
  drawSprites();
 
}



