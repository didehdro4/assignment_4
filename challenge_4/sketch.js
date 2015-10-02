var x = [];

function setup() {
  createCanvas(640, 480);
  noStroke();
  fill(43, 255, 255);
  // Create objects
  for (var i=0; i<60; i++) {
    x.push(new Jitter());
  }
}

function draw() {
  background(164, 4, 0);
  for (var i=0; i<x.length; i++) {
    if (mouseIsPressed) {
      background(100, 50, 0);
      x[i].move();
      x[i].display();


    } else {
      x[i].move();
      x[i].display();
    }
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
