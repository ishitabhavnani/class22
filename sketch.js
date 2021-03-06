const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var  myEngine, myWorld ;
var ground , ball;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();  //myEngine.world
  myWorld = myEngine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(myWorld, ground);
  
  var ball_options = {
    restitution : 0.7
  }
  ball=Bodies.circle(200,100,20 , ball_options);
  World.add(myWorld , ball);

  console.log(ground);
  console.log(ball);

}

function draw() {
  background("black");

  Engine.update(myEngine);

  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  fill("pink")
  ellipse(ball.position.x , ball.position.y , 20 , 20);

}