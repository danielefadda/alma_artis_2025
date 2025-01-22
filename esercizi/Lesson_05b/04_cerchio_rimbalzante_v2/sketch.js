// Keep track of the speed of the ball (just in y for this example)
let ySpeed = 0;
let xSpeed = 1;

//Variable used to accelerate ball downwards
const gravityAcceleration = 0.1;

let xPosition = 100;
let yPosition =100;
let circleDiameter = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //acceleration is an addition to speed over time:
  ySpeed = ySpeed + gravityAcceleration;

  //speed is an addition to distance over time:
  yPosition = yPosition + ySpeed;

  xPosition = xPosition + xSpeed;

  background(220);
  fill(255, 0, 0);
  circle(xPosition, yPosition, circleDiameter);

  //Air friction is the reduction of speed by a small percentage over time
  ySpeed = ySpeed * 0.99;
  
  //If the ball reaches the bottom of the screen, it will bounce back up
  if (yPosition > height - circleDiameter/2) {
    ySpeed = -ySpeed;
    
    //This next line prevents the ball from 'sticking'
    //to the bottom in an endless cycle of flipping signs. 
    //It ensures the ball is above the bottom one the sign is flipped.
    yPosition = height - circleDiameter/2 -1;
  }

  if (xPosition > width - circleDiameter/2 || xPosition < circleDiameter/2) {
    xSpeed = -xSpeed;
  }
}
