function setup() {
  createCanvas(400, 350);
  // Sfondo celeste chiaro
  background(200, 230, 255);
  noStroke();  // Non disegnare i contorni
  

  // Cono (triangolo marrone)
  fill(205, 133, 63);  // Colore marrone per il cono
  triangle(
    150, 150,    // Punto in basso a sinistra
    250, 150,    // Punto in basso a destra
    200, 300     // Punto in alto (vertice del cono)
  );



  // Pallina di gelato in basso (cioccolato)
  fill(139, 69, 19);  // Marrone scuro
  circle(230, 130, 80);

    // Pallina di gelato in alto (vaniglia)
    fill(255, 248, 220);  // Crema
    circle(210, 80, 80);
  
  // Pallina di gelato al centro (fragola)
  fill(255, 182, 193);  // Rosa
  circle(170, 120, 80);
  
}

function draw() {
  
}
