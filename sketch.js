const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
  var ball07={
 restitution:1
} 
ball=Bodies.circle(100,100,30,ball07)
World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30)
}
