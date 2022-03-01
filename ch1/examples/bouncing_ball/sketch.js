// Random Walker


let pos = {};
let vel = {};

function setup() {
    pos = createVector(100, 100);
    vel = createVector(1, 2);
    createCanvas(400, 400);
}

function draw() {
    background(0);
    stroke(255, 0, 0);
    fill(255, 0, 0);

    ellipse(pos.x, pos.y, 10, 10);

    pos.add(vel)

    if (pos.x <= 0 || pos.x >= width) {
        vel.x *= -1;
    }

    if (pos.y <= 0 || pos.y >= height) {
        vel.y *= -1;
    }
}