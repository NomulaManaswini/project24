
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin1,dustbin2,dustbin3,paper,ground;


function setup() {
	createCanvas(1200, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

ground=new Ground (600,700,1200,20);

	paper  = new Paper(200,500,30);
	dustbin1=new DustBin(700,620,20,140);
	dustbin2=new DustBin(900,620,20,140);
	dustbin3=new DustBin(800,680,180,20);
}


function draw() {
	background("black")
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
	}
}



