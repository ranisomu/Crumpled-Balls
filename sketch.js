var bin1,bin2,bin3;
var paper,ground;
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
	bin1 = new Bin(650,670,20,200);
	bin2 = new Bin(760,630,100,20);
	bin3 = new Bin(540,630,100,20);

	paper = new Paper(200,200,40)
	
	ground = new Ground(width/2,690,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-230})


 }

}

