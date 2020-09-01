
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, ballobj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(1200,650);
	ballobj=new Ball(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	bottomSprite = createSprite(380,20,70,10);
	bottomSprite.shapeColor = "aqua";
	rightSprite = createSprite(350,20,10,70);
	rightSprite.shapeColor = "aqua";

    //Create a leftSprite
	leftSprite = createSprite(420,20,10,70);
	leftSprite.shapeColor = "aqua";

    //Create a matter.js ground
	bottom = Bodies.rectangle(380,20,70,10,{isStatic: true});
	World.add(world, bottom);

    //Create a right
	right = Bodies.rectangle(350,20,10,70,{isStatic: true});
	World.add(world,right);

  //Create a left
  left = Bodies.rectangle(420,20,10,70,{isStatic: true});
	World.add(world,left);


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  //dustbinObj.display();
  ballobj.display();
  groundObject.display();
  
  bottomSprite.x = bottom.position.x;
  bottomSprite.y = bottom.position.y;

  //rightSprite.x = right.position.x and viceversa
  rightSprite.x = right.position.x;
  rightSprite.y = right.position.y;

  //leftSprite.x = left.position.x and viceversa
  leftSprite.x = left.position.x;
  leftSprite.y = left.position.y;
  
  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballobj.body,ballobj.body.position,{x:85,y:-85});
    
  	}
}





