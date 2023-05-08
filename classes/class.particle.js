class Particle {
    constructor(vx = random(-5, 5), vy = random(-5, 5), radius = 5) {
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

        this.cRest = 0.999
    }
    draw() {
        fill(240)
        ellipse(this.x, this.y, this.radius * 2)
    }
    update() {
        this.applyGravity()
        this.velx += this.accx
        this.vely += this.accy
        this.x += this.velx
        this.y += this.vely
    }
    applyGravity() {
        if (this.isAboveFloor()) {
            this.vely += 0.98
        }
        if (this.vely >= 0 && this.y + this.radius >= height) {
            this.vely *= this.cRest
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
            if (this.x <= 0 && this.velx <= 0) {

                this.velx *= - this.cRest
                collidingWall = true


            } else if (this.x >= width && this.velx >= 0) {
                this.velx *= - this.cRest
                collidingWall = true
            }
            if (this.vely >= 0 && this.y + this.radius >= height) {
                this.y = height - this.radius
                this.vely *= - this.cRest

                collidingWall = true
            } else if (this.vely <= 0 && this.y - this.radius <= 0) {
                this.y = 0 - this.radius
                this.vely *= -this.cRest

                collidingWall = true
            }
            if (collidingWall) {
                if (abs(this.vely) < 0.5) {
                    this.vely = 0
                }
                if (abs(this.velx) < 0.5) {
                    this.velx = 0
                }

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