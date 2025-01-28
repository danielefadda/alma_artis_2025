var x = 0;  // Initialize variable

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  while (x < width) {  // Continue condition
    ellipse(x, 100, 20, 20);
    x = x + 30;  // Update variable
}
}
