var thickness, wall;
var bullet, weight,speed;






function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 10);
  
  wall = createSprite(1300,200,thickness,height/2)

  speed = random(223,321);
 weight = random(30,52);

 thickness = random(22,83)

  bullet.velocityX  = speed;
}

function draw() {
  background("black"); 
  
  
 if(hasCollided(bullet,wall)) {

  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }


 }





 




  drawSprites();
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return  true;
}
return  false;


}