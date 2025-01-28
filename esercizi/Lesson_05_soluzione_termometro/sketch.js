// Scrivere un 
// t>30: hot
// 20<t<30: warm
// 10<t<20: cold
// 0<t<10: freezing
// t<10: very cold

// Draw a termometer that changes color depending on the temperature

let temperature = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245  );
  let mappedH = map(temperature, -10, 40, 350, 50);
  //rettangolo di base
  rectMode(CENTER)
  noStroke()
  fill(180)
  rect(width/2, height/2, 38, 355,10);

  // rettangolo temperatura
  if (temperature > 30) {
    stroke(255, 0, 0);
  } else if (temperature > 20) {
    stroke(255, 255, 0);
  } else if (temperature > 10) {
    stroke(0, 0, 255);
  } else if (temperature > 0) {
    stroke(0, 255, 255);
  } 
  else {
    stroke(255, 255, 255);
  }

  strokeWeight(20)
  line(width/2, 350, width/2, mappedH);

  // linee graduate
  stroke(0);
  strokeWeight(1)
  line(width/2 - 20 , map(-10, -10, 40, 350, 50) , width/2 +20, map(-10, -10, 40, 350, 50) );
  line(width/2 - 20 , map(0, -10, 40, 350, 50) , width/2 +20, map(0, -10, 40, 350, 50) );
  line(width/2 - 20 , map(10, -10, 40, 350, 50) , width/2 +20, map(10, -10, 40, 350, 50) );
  line(width/2 - 20 , map(20, -10, 40, 350, 50) , width/2 +20, map(20, -10, 40, 350, 50) );
  line(width/2 - 20 , map(30, -10, 40, 350, 50) , width/2 +20, map(30, -10, 40, 350, 50) );
  line(width/2 - 20 , map(40, -10, 40, 350, 50) , width/2 +20, map(40, -10, 40, 350, 50) );



  // testo con la temperatura
  noStroke()
  fill(0)
  textSize(22)
  tText = Math.floor(temperature)  + '🌡️ ';
  text(tText, width/2 - 70, mappedH + 10 )  ;

 

  

  // testo con le temperature
  text('🥵 40', width/2 + 30, map(40, -10, 40, 350, 50) );
  text('🌈 30', width/2 + 30, map(30, -10, 40, 350, 50) );
  text('☀️ 20', width/2 + 30, map(20, -10, 40, 350, 50) );
  text('☁️ 10', width/2 + 30, map(10, -10, 40, 350, 50) );
  text('❄️ 0', width/2 + 30, map(0, -10, 40, 350, 50) );
  text('🧊 -10', width/2 + 30, map(-10, -10, 40, 350, 50) );




}

function mousePressed() {
  temperature = random(-10, 40);
  console.log(temperature);
}