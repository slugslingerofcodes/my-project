class Enemy {
    constructor(x,y){
      var opt = {
        isStatic:true
      }
      
      this.body = Matter.Bodies.rectangle(x,y,25,25)
      Matter.World.add(world,this.body)
    }
    
    display(){
       push()
    //  translate(this.body.position.x,this.body.position.y) ;
    //   rotate(this.body.angle)
      imageMode(CENTER)
      image(enemyImage,this.body.position.x,this.body.position.y,25,25)
      pop()
    }
  }