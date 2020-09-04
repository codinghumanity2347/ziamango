const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;



function setup() {
	createCanvas(1350, 660);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    //box1 = new Box(width/2, 650, 1350, 100, {isStatic:true})
    tree = new Tree(1050, 380, 500, 500);
    stone1 = new Stone(185, 495, 40, 40)
    boy1 = new Boy(stone1.body, {x:185, y:495})
    mango1 = new Mango(1050, 210, 75, 75)
    mango2 = new Mango(1140, 210, 55, 55)
    mango3 = new Mango(1000, 290, 65, 65)
    mango4 = new Mango(1230, 320, 45, 45)
    mango5 = new Mango(880, 320, 75, 75)
    mango6 = new Mango(1120, 350, 55, 55)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background('skyBlue');
  Engine.update(engine)

  //box1.display();
  tree.display();

  stone1.display();
  boy1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

}

function mouseDragged(){
  Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
  }
  
  function mouseReleased(){
  boy1.fly()
  }
  
  function keyPressed(){
      if(keyCode == 32){
          boy1.attach(stone1.body);
      }
  }



