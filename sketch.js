const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
var umbrella1;
var drops = [];
var maxDrops = 100;
var image1, image2, image3, image4;
function preload(){
    image1 = loadImage("images/thunderbolt/1.png");
    image2 = loadImage("images/thunderbolt/2.png");
    image3 = loadImage("images/thunderbolt/3.png");
    image4 = loadImage("images/thunderbolt/4.png");
}
function setup(){
   var canvas = createCanvas(1000,1000,40);
    engine = Engine.create();
    world = engine.world;
    umbrella1 = new Umbrella(200,500);
    // drops = new Drops(30,30,30);
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
}

function draw(){
    background("white");
    Engine.update(engine);
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
    }
    if (frameCount % 20 === 0) {
        thunderbolt = createSprite(random(100, 1000), 0, 100, 100);
        var rand = Math.round(random(1,5));
        switch(rand){
            case 1: thunderbolt.addImage(image1);
            break;
            case 2: thunderbolt.addImage(image2);
            break;
            case 3: thunderbolt.addImage(image3);
            break;
            case 4: thunderbolt.addImage(image4);
            break;
        }
    }
    umbrella1.display();
    drawSprites();
}   

