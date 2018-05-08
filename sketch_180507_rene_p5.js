var c=0;

function setup() {
  createCanvas(317, 372);

}

function draw() {
  if (c==0) {
  background(170, 212, 255);
  } 
  else if (c==1) {
    noStroke();
    for (var i=0; i<width; i++) {
      for (var j=0; j<height; j++) {
        stroke( i, j, 100);
        point(i, j);
      }
    }
  } 
  else if (c==2) {
    background(175, 175, 175);
    water(random(width), random(height), 10);
  }

  //draw sea
  noStroke();
  fill(49, 74, 93);
  rect(0, 340, width, 32);

  //draw clouds
  cloud(width/2, 170, 65);
  cloud(60, 120, 55);
  cloud(80, 210, 40);
  cloud(width/2, 250, 30);
  cloud(200, 100, 30);
  cloud(250, 300, 50);
  cloud(100, 50, 40);
  cloud(60, 270, 45);
  cloud(300, 50, 55);
  cloud(300, 250, 35);
  cloud( 270, 150, 40);

  //draw bird
  bird(mouseX, mouseY);

  //shadow
  fill(0, 100);
  noStroke();
  push();
  translate(mouseX, mouseY);
  quad(-40, 50, -105, 25, -150, -110, -20, 25);
  quad(-150, -110, -20, 25, 0, 0, -40, -90);
  quad(0, 0, 50, -100, 110, -150, 50, 0);
  quad(-40, 50, 0, 0, 50, 0, 20, 50);
  quad(-90, 150, -10, 150, -15, 110, -50, 90);
  quad(-40, 50, -50, 90, -15, 110, 20, 50);
  pop();
}

function cloud(x, y, r) {
  noStroke();
  fill(255);
  ellipse(x, y, r, r);
  ellipse(x-r*0.6, y+r*0.1, r*0.7, r*0.7);
  ellipse(x+r*0.6, y+r*0.1, r*0.7, r*0.7);
}

function bird(X, Y) {
  push();
  translate(X, Y);
  noFill();
  stroke(0);
  strokeWeight(3);
  //wings
  bezier(0, 0, -30, -50, -10, -100, -150, -110); 
  bezier(-150, -110, -100, -20, -150, 20, -40, 50); 
  bezier( 20, -15, 25, -60, 50, -110, 110, -150);
  bezier( 110, -150, 70, -80, 80, -50, 45, -10);
  //head
  bezier(0, 0, 15, -5, 10, -10, 20, -15);
  bezier(45, -10, 50, -7, 52, 3, 50, 5);
  bezier( 50, 5, 53, 8, 54, 10, 55, 13);
  bezier( 55, 13, 45, 5, 30, 5, 25, 15);
  //body
  bezier(-40, 50, -50, 80, -30, 80, -90, 150);
  bezier( 25, 15, 30, 70, -40, 80, -10, 150);
  line( -90, 150, -10, 150);
  pop();
}

function water(s, t, R) {
  fill(185, 237, 255);
  noStroke();
  for (var i = 2; i < R; i++ ) {
    ellipse(s, t + i*4, i*2, i*2);
  }
}  

function mouseReleased() {
  if (c==0) c=1;
  else if (c==1) c=2;
  else if (c==2) c=0;
}
