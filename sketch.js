
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImg;
var ground;
var boy,boyIMG;
var stone;
var rope;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload() {
	boyIMG = loadImage("Plucking+mangoes/boy.png");
	treeImg = loadImage("Plucking+mangoes/tree.png")
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(300, 570, 10, 10);
	boy.addImage(boyIMG);
	boy.scale = 0.14;
	// tree = new Tree(1100,325,700,700);
    ground = new Ground(800,675,1600,65);
	stone = new Stone(230,500,40);
	rope = new Rope(stone.body,{x:230,y:500});
	mango1 = new Mango(1100,70,43);
	mango2 = new Mango(1175,148,40);
	mango3 = new Mango(1320,190,35);
	mango4 = new Mango(1000,196,50);
	mango5 = new Mango(860,253,45);
	mango6 = new Mango(1240,254,50);
	mango7 = new Mango(1350,275,32);
	mango8 = new Mango(1100,290,55);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0,165,255);

	imageMode(CENTER)
	image(treeImg, 1100, 325, 700, 700)

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);

	keyPressed();

	// tree.display();
	ground.display();
	drawSprites();
	rope.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
}

function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly()
}

function keyPressed(){
    if (keyDown("space")) {
		Body.setPosition(stone.body,{x:230,y:500})
		launcherObject.attach(stone.body);
	}
}