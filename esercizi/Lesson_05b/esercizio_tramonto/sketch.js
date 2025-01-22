//Variabili per cambiare colore di sfondo
let hue = 14;
let saturation = 110;
let brightness = 0;

//variabile per posizione del sole
let sunHeight = 600; 

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  
  //riempi lo sfondo con un colore (che cambia)
  colorMode(HSB);
  background(hue, saturation, brightness);


  
  colorMode(RGB)
  //sun
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 180);
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 140);
  
  fill(110, 50, 18); // montagna destra
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400);  
  
  fill(150, 75, 0); // montagna sinistra
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400); 
  
  fill(150, 100, 0); // montagna centrale
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
  
  // reduce sunHeight by 2 until it reaches 140 
  if (sunHeight > 130) {
    sunHeight -= 2;
    
    // modify custom variables for sky color during sunrise
 
    if (sunHeight < 480) {
      hue += 0.15;
      saturation -= 0.2;
      brightness += 0.7;
      console.log(`h= ${hue}, s= ${saturation}, b= ${brightness}`);
    }
  }
   ``
}
  
  
  


