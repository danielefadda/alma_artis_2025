function setup() {
  createCanvas(600, 400);
  background(220);
    // Sfondo nero come nel gioco originale
    background(0);

    // pacman
    fill(255, 255, 0);  // Nero
    arc(200, 200, 100, 100, QUARTER_PI, TWO_PI - QUARTER_PI);
    
    // Pallina bianca da mangiare
    fill(255);  // Bianco
    circle(320, 200, 20);
    circle(80, 200, 20);
    circle(400, 200, 20);
    circle(480, 200, 20);

    // occhio di pacman
    fill(0);  // Nero
    circle(210, 170, 10);
    
}

function draw() {

}
