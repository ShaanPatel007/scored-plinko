class Particle{

    constructor(x,y)
    {
      var options = 
      {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,options);
          this.radius=10;
          World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(random(5),20,5);
        pop();

      

      }

   
      score()
      {
       if(this.body.position.y>390 && this.body.position.x<100)
       {
         score = score + 100;
       }

       if(this.body.position.y>390 && this.body.position.x<200)
       {
         score = score + 100;
       }

       if(this.body.position.y>390 && this.body.position.x<300)
       {
         score = score + 100;
       }

       if(this.body.position.y>390 && this.body.position.x<400)
       {
         score = score + 100;
       }

       if(this.body.position.y>390 && this.body.position.x<500)
       {
         score = score + 100;
       }


      }


    }