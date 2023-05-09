class Particle {
    constructor(vx = random(-10, 10), vy = random(-10, 10), radius = 5) {
        this.x = random(0, width)
        this.y = random(0, height)

        this.buffer = 10

        this.velx = vx
        this.vely = vy

        this.accx = 0
        this.accy = 0

        this.vMax = 0
        this.aMax = 0

        this.radius = radius

        this.cRest = random(0.05, 0.65)
        this.friction = 0.01


    }
    draw() {
        fill(240)
        ellipse(this.x, this.y, this.radius * 2)
    }
    update() {
        this.applyFriction()

        this.applyGravity()
        this.velx += this.accx
        this.vely += this.accy

        this.x += this.velx
        this.y += this.vely

        if (abs(this.vely) < 0.5) {
            this.vely = 0
        }

        if (abs(this.velx) < 0.5) {
            this.velx = 0
        }
    }

    applyFriction() {
        if (!this.isAboveFloor() && !(this.velx == 0)) {

            const sign = abs(this.velx) / this.velx
            if (sign) {
                this.velx -= sign * this.friction * this.radius * gravity
            }
        }
    }
    applyGravity() {
        if (this.isAboveFloor()) {
            this.vely += gravity
        }



    }
    isColliding() {

    }

    border() { }
    wallCollide(nature = 'Border') {
        var collidingWall = false
        if (nature == 'noBorder') {
            collidingWall = this.noborderCollide()

        } else if (nature == 'Border') {
            collidingWall = this.borderCollide()

        }
        return collidingWall
    }


}