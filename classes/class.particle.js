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

        print(this.velx)
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
                this.velx -= sign * this.friction * this.radius * 0.98
            }
        }
    }
    applyGravity() {
        if (this.isAboveFloor()) {
            this.vely += 0.98
        }



    }
    isAboveFloor() {
        return abs(this.y + this.radius - height) > 1
    }
    findDistance(other) {
        const xDist = this.x - other.x
        const yDist = this.x - other.x
        const myDist = ((xDist ** 2) + (yDist ** 2)) ** (0.5)
        return myDist
    }
    noborder() {
        if (this.x < 0 - this.buffer) {
            this.x = width
            collidingWall = true
        } else if (this.x > width + this.buffer) {
            this.x = 0
            collidingWall = true
        }
        if (this.y > height + this.buffer) {
            this.y = 0
            collidingWall = true
        } else if (this.y < 0 - this.buffer) {
            this.y = height
            collidingWall = true
        }
    }
    wallCollide(nature = 'Border') {
        var collidingWall = false
        if (nature == 'noBorder') {
            this.noborder()

        } else if (nature == 'Border') {
            if (this.velx <= 0 && this.x - this.radius <= 0) {

                this.velx *= - this.cRest
                this.x = 0
                collidingWall = true


            } else if (this.velx >= 0 && this.x + this.radius >= width) {
                this.x = width - this.radius

                this.velx *= - this.cRest
                collidingWall = true
            }
            if (this.vely >= 0 && this.y + this.radius >= height) {
                this.vely *= - this.cRest
                this.y = height - this.radius


                collidingWall = true
            } else if (this.vely <= 0 && this.y - this.radius <= 0) {
                this.vely *= -this.cRest
                this.y = 0 - this.radius

                collidingWall = true
            }


        }
        return collidingWall
    }
    isColliding() {

    }
    fixResize(winScale, prevScale) {
        const ratio = winScale / prevScale
        this.x *= ratio
        this.y *= ratio
        this.velx *= ratio
        this.vely *= ratio
        this.accx *= ratio
        this.accy *= ratio
        this.radius *= ratio

    }
}