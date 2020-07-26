
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roofs;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var string1,string2,string3,string4,string5;
var bobDiameter=50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		roofs=new roof(400,300,400,20);
		
		bobObject1=new bob(260,500);
		bobObject2=new bob(330,500);
		bobObject3=new bob(400,500);
		bobObject4=new bob(470,500);
		bobObject5=new bob(540,500);

		string1=new string(bobObject1.body,roofs.body,-bobDiameter*2,0);
		string2=new string(bobObject2.body,roofs.body,-bobDiameter*1,0);
		string3=new string(bobObject3.body,roofs.body,-bobDiameter*0,0);
		string4=new string(bobObject4.body,roofs.body,bobDiameter*1,0);
		string5=new string(bobObject5.body,roofs.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(176, 224, 230);
  
  roofs.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-85,y:95})
	}
}

