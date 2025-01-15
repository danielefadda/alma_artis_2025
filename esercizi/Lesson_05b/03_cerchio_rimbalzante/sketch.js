let circleX = 100;
let circleY = 300;
let diameter = 50;
speedX = 2;
speedY = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(circleX, circleY, diameter);
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  
  if (circleX > width-diameter/2) {
    speedX = -speedX;
    fill(random(255), random(255), random(255));
  }
  if (circleX < diameter/2) {
    speedX = -speedX;
    fill(random(255), random(255), random(255));
  }
  if (circleY > height-diameter/2 || circleY < diameter/2) {
    speedY = -speedY;
    fill(random(255), random(255), random(255));
  }

}

// Salva 5 secondi di gif quando l'utente preme il tasto 's'.
function keyPressed() {
  if (key === 's') {
    saveGif('bouncing_ball', 5);
  }
}

function mousePressed() {
  if (mouseX > width/2) {
    diameter += 10;
  }
  else {
    diameter -= 10;
  }

  if (mouseY > height/2) {
    speedX += 1;
    speedY += 1;
  } else {
    speedX -= 1;
    speedY -= 1;
  }
}