// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let mover;

function setup() {
  createCanvas(600, 400);
  mover = new Mover(200, 200);

}

function draw() {
  background(102);
   stroke(255,0,0);
   strokeWeight(2);
   fill(255, 0, 0);
   triangle(300, 350, 275, 400, 325, 400);

  if (keyIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  
  let gravity = createVector(random(0, 0.8));
  mover.applyForce(gravity);
  
  mover.update();
  mover.edges();
  mover.show();
}