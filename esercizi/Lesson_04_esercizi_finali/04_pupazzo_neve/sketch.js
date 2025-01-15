function setup() {
  // Creiamo un canvas quadrato
  createCanvas(400, 500);

    // Sfondo azzurro chiaro
    background(200, 220, 255);
    noStroke();

    // terreno
    fill(100, 200, 100);
    rect(0, 400, 400, 100);
  
    // Colore bianco per il pupazzo
    fill(255);
    
    // Palla di neve grande (in basso)
    circle(200, 380, 160);
    
    // Palla di neve media (al centro)
    circle(200, 280, 120);
    
    // Palla di neve piccola (in alto - la testa)
    circle(200, 190, 100);

    // occhio sinistro
    fill(0);
    circle(180, 180, 10);

    // occhio destro
    circle(220, 180, 10);

    // naso arancione
    fill(255, 100, 0);
    triangle(200, 190, 200, 200, 250, 195);

    // cappello a ciliindro
    fill(0);
    rect(150, 130, 100, 20);
    rect(170, 70, 60, 60);

    // fascia cilindro
    fill(255, 255, 255);
    rect(170, 110, 60, 15);

    // braccio sinistro
    stroke(139, 69, 19);
    strokeWeight(5);
    line(100, 230, 150, 260);

    // braccio destro
    line(300, 230, 250, 260);

    // bottoni
    fill(0);
    noStroke();
    circle(200, 270, 10);
    circle(200, 320, 10);
    circle(200, 370, 10);
  
}

function draw() {

}