function setup() {
  createCanvas(600, 400);
  // Crea una bandiera con tre bande verticali di colori diversi.
  background(200,200,200);
  // Usa la funzione noStroke() per rimuovere il contorno.
  noStroke();
  // Usa la funzione rectMode() per impostare la modalità di disegno dei rettangoli.
  rectMode(CORNER);
  // Usa la funzione fill() per impostare il colore di riempimento.
  fill(0, 255, 0);
  // Usa la funzione rect() per disegnare i rettangoli.
  // Usa la funzione width per ottenere la larghezza della finestra.
  // Usa la funzione height per ottenere l'altezza della finestra.
  rect(0, 0, 200, 400);
  // Seconda banda
  fill(255, 255, 255);
  rect(200, 0, 200, 400);
  // Terza banda
  fill(255, 0, 0);
  rect(400, 0, 200, 400);
}

function draw() {


}
