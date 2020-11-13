class Ground{

constructor(x,y,width,hieght){
var options = {
  isStatic:true,
}

this.body = Bodies.rectangle(x,y,width,hieght,options);
this.width = width;
this.hieght = hieght;

World.add(world,this.body);

}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
}

}

