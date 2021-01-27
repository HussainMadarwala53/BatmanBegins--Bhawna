class Drops {
    constructor(x,y){
        var drops_options ={
            friction: 0.001,
            restitution:0.1    
        }
        this.rain = Matter.Bodies.circle(x,y,5, drops_options);
        this.radius = 5;
        World.add(world, this.rain);
    }
    display(){
        // var position = this.body.position;
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        // ellipse(position.x, position.y, this.radius, this.radius);
    }
}
