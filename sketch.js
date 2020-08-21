const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world;
var me = []
me.push("two", "three", "four")
console.log(me)

var box1;
function setup() {
  createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(600,400,1200,10);
  box1 = new Box(400,250,70,70);
  box2 = new Box(400,270,70,70);
  box3 = new Box(420,250,70,70);
  box4 = new Box(430,250,70,70);
  box5 = new Box(440,250,70,70);
  box6 = new Box(450,250,70,70);
  box7 = new Box(460,250,70,70);
  box8 = new Box(470,250,70,70);
  box9 = new Box(600,250,70,70);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();

  drawSprites();

}