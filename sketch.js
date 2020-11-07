
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
  Dustbin1 = new Dustbin(700,650,100,100);
 /* Dustbin2 = new Dustbin(650,650,70,70);
  Dustbin3 = new Dustbin(600,650,70,70);
  Dustbin4 = new Dustbin(580,600,70,70);
  Dustbin5 = new Dustbin(720,600,70,70);*/
	ground = new Ground(400,680,800,20);
	paper = new Paper(200,100,50);
	

  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);
  

  Dustbin1.display();
  /*Dustbin2.display();
  Dustbin3.display();
  Dustbin4.display();
  Dustbin5.display();*/
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
 }
 }



