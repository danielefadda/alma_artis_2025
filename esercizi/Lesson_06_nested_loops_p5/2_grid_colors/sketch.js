// disegna una griglia di cerchi colorati

function setup() {
  createCanvas(400, 400);
  background(240);
  colorMode(HSB);
  
  for(let x = 25; x < 400; x+=25)
  {
    for(let y = 25; y < 400; y+=25)
    {
      noStroke();
      let customHue = x / 400 * 360; // 0 -> 360 è il valore che può assumere il parametro hue
      let customSaturation = y / 400 * 100; // 0 -> 100 è il valore che può assumere il parametro saturation

      fill(customHue, customSaturation, 255);
      ellipse(x, y, 24);
    }
  }
}
