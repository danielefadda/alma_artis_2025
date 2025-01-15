function setup() {
  createCanvas(500, 500);
  background(220);

  // Draw the pole
  fill(252, 186, 3);
  noStroke();
  rectMode(CENTER);
  rect(250, 400, 50, 300);


  // Draw a rectangle at the center of the canvas, with a width of 100 and height of 400
  rectMode(CENTER);
  fill(50, 50, 50);
  noStroke();
  rect(250, 250, 100, 300);

  // Draw the red light
  fill(235, 52, 52);
  circle(250, 150, 70);

  // Draw the yellow light
  fill(245, 211, 44);
  circle(250, 250, 70);

  // Draw the green light
  fill(26, 189, 81);
  circle(250, 350, 70);


}

function draw() {

}
