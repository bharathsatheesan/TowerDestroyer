const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var polygon, polygonImg;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,400)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 390, 800, 20);
    stand = new Ground(500, 190, 250, 20);

    //first stack
    b1 = new Box(600, 350, 30, 40);
    b2 = new Box(630, 350, 30, 40);
    b3 = new Box(660, 350, 30, 40);
    b4 = new Box(690, 350, 30, 40);
    b5 = new Box(615, 315, 30, 40);
    b6 = new Box(645, 315, 30, 40);
    b7 = new Box(675, 315, 30, 40);
    b8 = new Box(630, 275, 30, 40);
    b9 = new Box(660, 275, 30, 40);
    b10 = new Box(645, 235, 30, 40);

    //second stack
    b11 = new Box(430, 150, 30, 40);
    b12 = new Box(460, 150, 30, 40);
    b13 = new Box(490, 150, 30, 40);
    b14 = new Box(520, 150, 30, 40);
    b15 = new Box(445, 115, 30, 40);
    b16 = new Box(475, 115, 30, 40);
    b17 = new Box(505, 115, 30, 40);
    b18 = new Box(460, 80, 30, 40);
    b19 = new Box(490, 80, 30, 40);
    b20 = new Box(475, 35, 30, 40);

    var options = {
        restitution : 0.5,
        friction : 0.4,
        density : 5
    }

    polygon = Matter.Bodies.circle(100, 200, 30, options);
    World.add(world, polygon);

    slingShot = new SlingShot(polygon, {x:200, y:200});

    //Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    text("Drag and release the stone to launch it.", 10, 10, 400, 400);
    background(0);

    push();
    translate(polygon.position.x, polygon.position.y);
    rotate(polygon.angle);
    imageMode(CENTER);
    image(polygonImg, 0, 0, 65, 65);
    pop();

    ground.display();
    stand.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
