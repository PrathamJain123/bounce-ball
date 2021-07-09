const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var ground , ball , engine , world
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  var groundop = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390 , 200 , 20 , groundop);
  World.add(world , ground)
  var ballop = {
    restitution: 1.2
  }
ball = Bodies.circle(200 , 100 , 20 , ballop )
World.add(world , ball)
}

function draw() {
  background(0);  
Engine.update(engine)
rect(ground.position.x , ground.position.y , 400 , 20)
ellipse(ball.position.x , ball.position.y , 20 , 20)
}