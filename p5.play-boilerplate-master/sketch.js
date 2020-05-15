var raindrop;

function setup() {
  createCanvas(800,400);
  var raindrop=new Raindrop(200,200);
}

function draw() {
  background(255,255,255); 
  raindrop.display();
  drawSprites();
}