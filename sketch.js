var bullet,wall,thickness;
var speed,weight;
var damage=0;

function setup() 
{
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 50, 20);
  
  thickness=random(22,83)

 wall=createSprite(1000,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);

 speed=random(223,321);

 weight=random(30,52)
  
 bullet.velocityX=speed;

 damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0);  




 


  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage<10)
  {
    
    wall.shapeColor="green";

  }
  if(damage>10)
  {
    
    wall.shapeColor="red";

  }
  
}
  drawSprites();
}