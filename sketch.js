const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
//var  sling;



function setup() {
  var canvas=createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

stand = new Ground(900,500,250,20);

ball = new Ball(150,550,40);

slingShot = new SlingShot(ball.body,{x:150,y:550});

block2 = new Block(975,470,30,40);
  block3 = new Block(945,470,30,40);
  block4 = new Block(915,470,30,40);
  block5 = new Block(885,470,30,40);
  block6 = new Block(855,470,30,40);
  block7 = new Block(825,470,30,40);
  //level two
  block8 = new Block(840,430,30,40);
  block9 = new Block(870,430,30,40);
  block10 = new Block(900,430,30,40);
  block11 = new Block(930,430,30,40);
  block12 = new Block(960,430,30,40);
  
  //level three
  block13 = new Block(945,390,30,40);
  block14 = new Block(915,390,30,40);
  block15 = new Block(885,390,30,40);
  block16 = new Block(855,390,30,40);

  //top
  block17 = new Block(865,350,30,40);
  block18 = new Block(895,350,30,40);
  block19 = new Block(925,350,30,40);
  //set 2 for second stand
  //level one
 
 
  block20 = new Block(905,310,30,40);
  block21 = new Block(875,310,30,40);
  //level two
  //blocks6 = new Block(670,135,30,40);
  //blocks7 = new Block(700,135,30,40);
  //blocks8 = new Block(730,135,30,40);
  //top
  //blocks9 = new Block(700,95,30,40);








}

function draw() {
  background("black");
  Engine.update(engine);
  strokeWeight(4);
   

  stand.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
 // block22.display();
  ball.display();
  slingShot.display();
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}