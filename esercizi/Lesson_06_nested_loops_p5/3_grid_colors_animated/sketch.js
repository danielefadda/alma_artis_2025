currentX = 25;
currentY = 25;

function setup() {
  createCanvas(400, 400);
  background(30);
  colorMode(HSB);
  // Impostiamo un frame rate più basso per vedere meglio l'animazione
  frameRate(30);
  
}

function draw() {

// Disegniamo un cerchio alla posizione corrente
noStroke();
let customHue = currentX / 400 * 360;
let customSaturation = currentY / 400 * 100;

fill(customHue, customSaturation, 255);
ellipse(currentX, currentY, 24);

// Aggiorniamo le coordinate per il prossimo cerchio
currentY += 25;

// Se abbiamo raggiunto il bordo inferiore, andiamo alla colonna successiva
if (currentY >= 400) {
  currentY = 25;  // Torniamo all'inizio della riga
  currentX += 25; // Spostiamoci di una colonna
}



// Se abbiamo completato tutta la griglia, fermiamo l'animazione
if (currentX >= 400) {
  noLoop();
}

// if (currentY >= 400) {
//   background(30);
//   currentX = 25;  // Torniamo all'inizio della riga
//   currentY = 25; // Scendiamo di una riga
// }
}