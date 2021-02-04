var hr,mn,sc;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = minute();
  angleMode(360);
  scAngle = map(sc,0,60,0,360)
}

function draw() {
  background(255,255,255);  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(100,100,400,100);
  pop();
  drawSprites();
}