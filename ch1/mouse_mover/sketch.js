// Random Walker

let movers = [];
const moversNum = 10;

function setup() {
    createCanvas(400, 400);
    
    for (let i = 0; i < moversNum; i++) {
        movers.push(new Mover());
    }
}

function draw() {
    background(0);
    movers.forEach((m) => {
        m.step();
        m.draw();
    })
}