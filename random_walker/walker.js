class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
    }

    step() {
        const dir = p5.Vector.random2D()
        this.pos.add(dir)
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(0, 0, 255);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}