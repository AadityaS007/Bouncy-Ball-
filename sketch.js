// Most important things from physics engine
// Step 1: creating constants for Matter properties
const Engine = Matter.Engine;  //Universe
const World = Matter.World;   // Earth
const Bodies = Matter.Bodies;  // Humans, Trees, Animals etc

// Step 2: create engine and world for own use
var myEngine, myWorld; // To be used in my game

var object1;
var ground;
var ball;

function setup() {
  createCanvas(800, 400);

  // Step 3: Create engine for my engine
  myEngine = Engine.create();  // myEngine has its own world
  myWorld = myEngine.world;

  // Step 4: Creating a body into game world
  object1 = Bodies.rectangle(400, 200, 50, 50)

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400, 390, 800, 20, ground_options)


  var ball_options = {
    restitution : 0.8
  }

  ball = Bodies.circle(200, 10, 10,ball_options)

  //Step 5: Adding the body to the world
  World.add(myWorld, object1)
  World.add(myWorld, ground)
  World.add(myWorld, ball)
}

function draw() {

  // Step 6: Update my Engine
  Engine.update(myEngine)

  background("lightblue");

  rectMode(CENTER)
  rect(object1.position.x, object1.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 800, 20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 10, 10)

}

