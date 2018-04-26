function setup() {
  createCanvas (windowWidth,windowheight);
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
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
