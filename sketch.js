var bullet,wall;
var bullet1,wall1;

var speed,weight;
var line;

function setup() {
  createCanvas(1600,600);
line=createSprite(10,300,3000,5)

  speed=random(55,90);
  weight=random(10,50)
 bullet= createSprite(100, 150, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor=(255)

 bullet1= createSprite(200, 450, 50, 50);
 bullet1.velocityX=speed;
 bullet1.shapeColor=(255)

 

 wall=createSprite(1200,150,60,180);
 wall.shapeColor=(80,80,80);

 wall1=createSprite(1200,450,60,180);
 wall1.shapeColor=(80,80,80);

 
}

function draw() {
  background(0); 
 if(wall.x-bullet.x<(wall.width/2+bullet.width/2)){ 
  bullet.velocityX=0
var deformation=1*weight*speed*speed/150
if( deformation>180){
  bullet.shapeColor=color(255,0,0)
}
 }

 if(wall1.x-bullet1.x<(wall1.width/2+bullet1.width/2)){ 
  bullet1.velocityX=0
var deformation=1*weight*speed*speed/200
if( deformation>250 ){
  bullet1.shapeColor=color(0,255,0)
}
 }

 

  drawSprites();
}