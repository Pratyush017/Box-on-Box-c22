var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine,world;


var box1,ground;
var boxes = [];
 
var value;
var Slider;
 
function setup() {
    createCanvas(800, 500);

    
    engine = Engine.create();
    world = engine.world; 
    Slider = createSlider(0, 100, 50);
    Slider.position(40, 365);
    Slider.input = map(engine.world.gravity, Slider.min, Slider.max, 0, 1);
    
    ground = new Ground(400,500,800,20);
}
 
function mousePressed() {
    box1 = new Box(mouseX,mouseY,50,30);
    boxes.push(box1);
}
 
function draw() {
    background(51);
    value = Slider.value();
    world.gravity.y = value;
    Engine.update(engine);
    for(var i = 0; i < boxes.length; i++){
      boxes[i].display();
    }
    ground.display();
  }
 


