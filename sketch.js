function setup() {
    createCanvas(600, 600);
    background("#F75C90");
  }
  
  function draw() {
    stroke("rgb(0,0,0)");
    fill("#896BC0");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  