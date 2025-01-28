const offset = 10;
const distance = 300;
function setup() {
  createCanvas(600, 400);
  background(235);
}
function draw() {
  for (let i = 0; i < width + distance; i += offset) {
    strokeWeight(1)
    stroke(0);
    line(i-distance, 0, i, height);
  }
}
