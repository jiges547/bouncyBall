const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create()
 world=engine.world
 box1=new box(200,100,50,50)
 box2=new box(240,300,50,50)
 ground1=new ground(200,390,400,20)
}

function draw() {
  background("yellow");
Engine.update(engine)
  box1.display()
  box2.display()
  ground1.display()
}