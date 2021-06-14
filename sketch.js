
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var constrainedLog;

function setup() {
	createCanvas(800,800);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(320,575,40);
	bob2 = new Bob(360,575,40);
	bob3 = new Bob(400,575,40);
	bob4 = new Bob(440,575,40);
	bob5 = new Bob(480,575,40);

	roof = new Roof(400,250,400,40);

	rope1 = new Rope(bob1.body, roof.body,-165,-145);
	rope2 = new Rope(bob2.body, roof.body,-85,-140);
	rope3 = new Rope(bob3.body, roof.body, 0,-140);
	rope4 = new Rope(bob4.body, roof.body,80,-140);
	rope5 = new Rope(bob5.body, roof.body,155,-140);
	
	Engine.run(engine)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -50, y : -50})
	}
}


function draw() {
  background("lightgrey");
  drawSprites();
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



