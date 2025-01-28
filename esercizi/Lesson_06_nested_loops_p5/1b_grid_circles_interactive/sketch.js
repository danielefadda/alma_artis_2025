function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);
  for(let x = 20; x <= mouseX; x += 40)   {
      for(let y = 20; y < mouseY; y += 40) {
          ellipse(x, y, 20, 20);
      }
  }
}