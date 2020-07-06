var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
pop=new Paper(200,200,30)
pip=new Dustbin(460,200,100,2)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pop.display();
  pip.display();
  drawSprites();
 
}



