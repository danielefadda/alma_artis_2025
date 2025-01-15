function setup() {
  createCanvas(400, 400);
    // Sfondo azzurro chiaro per il cielo
    background(135, 206, 235);

    // Prato (rettangolo verde)
    fill(34, 139, 34);
    noStroke();
    rect(0, 350, 400, 50);

    // comignolo (rettangolo grigio)
    fill(128);
    rect(250, 120, 20, 50);
  
    // Base della casa (rettangolo marrone)
    fill(139, 69, 19);
    rect(100, 200, 200, 150);
    
    // Tetto (triangolo rosso)
    fill(178, 34, 34);
    triangle(
      100, 200,    // Punto sinistro
      200, 100,    // Punto in alto
      300, 200     // Punto destro
    );

    // Porta (rettangolo marrone)
    fill(102, 29, 22);
    rect(180, 280, 40, 70);


}

function draw() {
}
