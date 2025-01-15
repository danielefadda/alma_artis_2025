function setup() {
  createCanvas(400, 400);
 // Sfondo azzurro molto chiaro
  background(197, 239, 240);

  // supporti per il bersaglio
  stroke(0);
  strokeWeight(10);
  line(width/2, width/2, width*0.2, width);

  // supporti per il bersaglio
  stroke(0);
  strokeWeight(10);
  line(width/2, width/2, width*0.8, width);

 noStroke();
  
 // Centro del canvas
 let centroX = 200;
 let centroY = 200;
 
 // Cerchio esterno rosso
 fill(237, 35, 17);
 circle(centroX, centroY, 300);
 
 // Cerchio medio bianco
 fill(255);
 circle(centroX, centroY, 200);
 
 // Cerchio interno rosso
 fill(237, 35, 17);
 circle(centroX, centroY, 100);

}

function draw() {

}
