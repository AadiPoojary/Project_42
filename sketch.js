const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var bat,batImg,bestMan,bestManImg;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batImg = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png","bat/bat4.png","bat/bat5.png","bat/bat6.png","bat/bat7.png","bat/bat8.png","bat/bat9.png","bat/bat10.png","bat/bat11.png","bat/bat12.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(700,700);
    umbrella = new Umbrella(200,480);

    bat = createSprite(300,200);
    bat.addAnimation("moving",batImg);
    bat.scale = 0.8;

    //creating drops
    if(frameCount % 50 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,700), random(0,700)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount % 50 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,670), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

