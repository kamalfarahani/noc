class Mover {
    constructor() {
        this.location = createVector(
            random(0, 1) * width,
            random(0, 1) * height);
        
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector(0, 0);
    }

    step() {
        const mousePos = createVector(mouseX, mouseY);
        const accDir = p5.Vector.sub(mousePos, this.location);
        accDir.normalize();

        this.acceleration = accDir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
    }

    draw() {
        stroke(255, 255, 255)
        ellipse(this.location.x, this.location.y, 10, 10)
    }

    checkEdge() {
        if (this.x > width) {
            this.width = 0;
        }

        if (this.x < 0 ) {
            this.x = this.width;
        }

        if (this.y > height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = height;
        }
    }
}