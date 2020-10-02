const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,400,1200,20);

	rect1 = new Box(850,380,100,100);

	ball = new Ball(200,380,20,20);

	slingshot = new SlingShot(ball.body,{x:200, y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  rect1.display();

  ball.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


