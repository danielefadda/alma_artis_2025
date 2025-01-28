function setup() {
  createCanvas(400, 400);
  background(220);
  for (let x = 0; x < width; x += 50) {
    let size = random(10, 50);
    ellipse(x, 100, size, size);
  }
}