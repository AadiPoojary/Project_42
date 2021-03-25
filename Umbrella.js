class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.man = loadImage("bat/Bestman-01.png");
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        

        if(frameCount >= 200){
            image(this.man,pos.x,pos.y+70,200,300);
            this.man.scale = 2;
        }
    }
}