// Random Walker

const pos = {};

const cases = [0, -1, 1];


function setup() {
    pos.x = width / 2;
    pos.y = height / 2;
    createCanvas(400, 400);
    background(0);
}

function draw() {
    const caseX = cases[ floor(random(3)) ];
    const caseY = cases[ floor(random(3)) ];


    pos.x += caseX;
    pos.y += caseY;

    stroke(255);
    point(pos.x, pos.y)
}