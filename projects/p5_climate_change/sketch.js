// Loading the data
function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 250);
  background(220)

  // Figure out the height and width of each bar
  bars = table.getRowCount()
  rectWidth = width / bars
  rectHeight = height

  // Loop over the dataset
  for (let i = 0; i < bars; i++) {
    
    // Figure out the position of each bar
    x = i * rectWidth
    y = 0
    
    // Figure out the colour of each bar
    
    d = table.get(i, "Glob")
    console.log(d)
    
    if (d > 0) {
      col = lerpColor(color("white"), color("red"), d)
    } else {
      col = lerpColor(color("white"), color("blue"), -d)
    }

    fill(col)
    noStroke()
    
    // Draw the bar
    rect(x, y, rectWidth, rectHeight)
  }
}