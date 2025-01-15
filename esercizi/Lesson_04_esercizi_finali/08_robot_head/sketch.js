function setup() {
  createCanvas(400, 400);

  // Sfondo grigio chiaro
  background(220);
  noStroke();
  
  // Testa principale - grigio scuro
  fill(34, 135, 201);
  rect(100, 100, 200, 200);
  
  // Occhio sinistro - giallo
  fill(2255, 220, 105);
  rect(140, 150, 40, 40);
  rect(220, 150, 40, 40);
  
  // Antenna - grigio chiaro
  fill(200, 0, 100);
  rect(190, 50, 20, 50);
  
  // Base antenna - grigio più scuro
  fill(19, 80, 120);
  rect(180, 80, 40, 20);
  
  // Bocca - rettangolo rosso
  fill(200, 0, 100);
  rect(150, 220, 100, 20);
}

function draw() {

}
