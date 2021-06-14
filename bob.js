class Bob {
    constructor(x,y,r) {

      var options = {
        isStatic : false,
        restitution : 1,
        friction : 0,
        density : 0.8,
      }

      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      World.add(world, this.body);

      console.log(this.body);
    }

    display(){

    var paperPos = this.body.position;

     push();
     translate(paperPos.x, paperPos.y)
     ellipseMode(RADIUS);
     fill("pink");
     ellipse(0, 0, this.r, this.r);
     pop();
     
    }
  }