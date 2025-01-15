function setup() {
  createCanvas(400, 400);
  background(220);

  fill(224, 170, 76);
  // Orecchio sinistro (triangolo)
  triangle(
    130, 170,  // Base sinistra
    110, 100,   // Punta
    170, 130   // Base destra
  );
  
  fill(255, 150, 150);
  // interno orecchio sinistro (triangolo)
  triangle(
    135, 170,  // Base sinistra
    117, 110,   // Punta
    160, 130   // Base destra
  );

  fill(224, 170, 76);
  // Orecchio destro (triangolo)
  triangle(
    270, 170,  // Base sinistra
    230, 130,   // Punta
    290, 100   // Base destra
  );

  fill(255, 150, 150);
  // interno orecchio destro (triangolo)
  triangle(
    265, 170,  // Base destra
    240, 130,   
    285, 105   // Base sinistra
  );

  fill(224, 170, 76);
  // Testa del gatto (cerchio grigio)
  circle(200, 200, 160);
  

  // Occhio sinistro (cerchio nero)
  fill(255)
  circle(160, 180, 35);
  
  // Occhio destro (cerchio nero)
  fill(0);
  circle(240, 180, 15);

  // Pupilla sinistra (cerchio nero)
  fill(0);
  circle(160, 180, 15);

  
  // Naso (piccolo triangolo rosa)
  fill(255, 150, 150);
  triangle(
    180, 200,  // Sinistra
    220, 200,  // Destra
    200, 220   // Punta in basso
  );

  // Baffi sinistri (linee nere)
  stroke(0);
  strokeWeight(2);
  line(140, 200, 80, 200);
  line(150, 220, 100, 240);

  // Baffi destri (linee nere)
  line(260, 200, 320, 200);
  line(250, 220, 300, 240);

  // // Bocca (linea nera)
  // strokeWeight(4);
  // line(width*0.45, height *0.65, width*0.55, height *0.63);

  // Bocca (ovale nero)
  fill(0);
  ellipse(200, 250, 20, 30);



}

function draw() {

}
