
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;
var slingShot

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,100,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//Create a Ground
	

	
	slingShot= new Slingshot(paperObject.body,{x:200,y:100})

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
slingShot.display();
  
  
 
  
  
 
}

function mouseDragged(){
	Matter.Body.setPostition(paperObjectbody,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingShot.fly();
}




