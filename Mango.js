class Mango{
    constructor(x, y, r) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':0.5
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        
        this.image = loadImage("Plucking+mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
    }
}