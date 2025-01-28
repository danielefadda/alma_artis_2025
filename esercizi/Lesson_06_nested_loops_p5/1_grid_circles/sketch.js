function setup() {
  createCanvas(400, 400);
  background(205);

  for(let x= 40; x < width; x+=40){

    for(let y= 40; y < height; y+=40){
      noStroke();
      fill(255);

      // colore condizionale

      // if (x <= 200) {
      //   fill(255, 0, 0);
      // }

      // if (x >= 200) {
      //   fill(255, 0, 0);
      // }

      // if(x == 200 && y == 200){
      //   fill(255, 0, 0);
      // }
      
      ellipse(x, y, 30);
    }
  }
  
}

function draw() {

}