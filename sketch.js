var r = 255;
var g = 50;
var b = 75;

function setup() {
  createCanvas(800, 1200);

}


function draw() {
  background(250, 100, 120);

  stroke(0, 255, 255)

  fill(150, 170, 150);
  rect(700, 0, 100, 1200);

  fill(150, 170, 150);
  rect(0, 0, 100, 1200);

  fill(r, g, b);
  rect(300, 0, 200, 1200);



  if (mouseX > 300 && mouseX <= 500 && mouseY >= 0 && mouseY < 1200) {
    fill(r);
    ellipse(400, 600, 190, 190);
    fill(r);
    ellipse(400, 200, 50, 50);
    fill(r);
    ellipse(400, 1000, 50, 50);
  } else {
    fill(b);
    ellipse(400, 600, 100, 100);
    fill(b);
    ellipse(400, 600, 50, 50);
    fill(b);
    ellipse(400, 600, 50, 50);
  }

  if (mouseX > 300 && mouseX <= 500 && mouseY >= 0 && mouseY < 300) {
    fill(r);
    ellipse(400, 200, 150, 150);
  } else {
    fill(b);
    ellipse(400, 600, 100, 100);
  }

  if (mouseX > 300 && mouseX <= 500 && mouseY >= 900 && mouseY < 1200) {
    fill(r);
    ellipse(400, 1000, 150, 150);
  } else {
    fill(b);
    ellipse(400, 600, 100, 100);
  }


}

function mousePressed() {
  if (mouseX > 300 && mouseX <= 500 && mouseY >= 0 && mouseY < 1200) {
    r = random(230);
    g = random(100);
    b = random(180);
  } else {
    fill(0);
  }



}