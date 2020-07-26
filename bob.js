class bob{
    constructor(x,y){
        var bob_options={
            isStatic:false,
           restitution:1.0,
            friction:0,
            density:1.2
        }
       
        this.body=Bodies.circle(x,y,30,bob_options);
        this.radius=30;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}