// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
  background(102);
  stroke(255);
  strokeWeight(2);
  fill(255, 100);
  triangle(300, 350, 250, 400, 350, 400);
}

function draw() {
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  
  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);
  
  mover.update();
  mover.edges();
  mover.show();
}