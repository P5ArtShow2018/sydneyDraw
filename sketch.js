function setup() {
  createCanvas (800,800);
  background (0);
}

function draw() {
  noStroke ();
  fill(255);
  ellipse (mouseX,mouseY,20);
}

function mousePressed (){
  background (0)
}