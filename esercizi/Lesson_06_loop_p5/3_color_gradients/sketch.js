function setup() {
  createCanvas(400, 400);
  background(220);
  for (let x = 0; x < width; x += 50) {
    fill(x, 0, 0);
    ellipse(x, 100, 20, 20);
  }
}