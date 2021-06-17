class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1.5,
            friction:0.2,
            density:0.8
        }
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world, this.body);

    }
    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}