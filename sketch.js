const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gound;
var t;
var mango1,mango2,mango3,mango4,mango5;
var annoyance;
var stone;

function preload()
{
		a = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	gound = createSprite(400,655,790,20);
	t = new Tree;
	
    annoyance = addImage(a);

	mango1 = new Mango(20,20);
	mango2 = new Mango(20,20);
	mango3 = new Mango(20,20);
	mango4 = new Mango(20,20);
	mango5 = new Mango(20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stone = new S;
  mangol.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

 
  drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched" ){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
	if (keyCode == 32){
	  Matter.Body.setPosition(stoneObj.body,{x: 235, y: 420});
	  launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(Lstone , Lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance<= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}