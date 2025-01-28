function setup() {
  createCanvas(400, 400);
  background(220);
  for (let x = 0; x < width; x += 50) {
    stroke(random(255), random(255), random(255));
    line(x, 0, x, height);
  }
}