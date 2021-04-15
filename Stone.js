class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;

        this.image = loadImage("Plucking+mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
    }
}