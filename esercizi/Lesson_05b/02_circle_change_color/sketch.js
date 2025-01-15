function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  if (mouseX > width / 2) {
      fill(52, 186, 235);
  } else {
      fill(235, 156, 52);
  }
  
  ellipse(mouseX, mouseY, 50, 50);
  line(width / 2, 0, width / 2, height);
}