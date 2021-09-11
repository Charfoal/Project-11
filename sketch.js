var S1,S2,S3,S4;
var Sprites = []

function setup() {
  createCanvas(400,400);
S1 = createSprite(75,100,30,30)
S2 = createSprite(150,250,30,30)
S3 = createSprite(300,300,30,30)
S4 = createSprite(350,150,30,30)
Sprites = [S1,S2,S3,S4]
for(i=0; i<Sprites.length; i=i+1) {
console.log(Sprites[i].position.x)
}
}

function draw() 
{
  background("blue");
  drawSprites();
}

 

