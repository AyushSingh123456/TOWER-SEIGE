class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
  
    super.display();
  
     
     push();
     
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};