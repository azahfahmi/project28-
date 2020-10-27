class Mango{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution :0,
            friction :1,
        }
        this.body = Bodies.circle(x,y,70,options);
        this.x = x;
        this.y = y;
        this.r = 70;
        this.cru = loadImage("mango.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cru,100,355,70,70);
        pop();
    }
}