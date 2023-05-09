class Particle {
    constructor(vx = random(-rVect, rVect), vy = random(-rVect, rVect), radius = random(5, 12)) {
        this.x = random(0, width)
        this.y = random(0, height)

        this.buffer = 0.3

        this.velx = vx
        this.vely = vy

        this.accx = 0
        this.accy = 0

        this.vMax = 0
        this.aMax = 0

        this.radius = radius

        this.cRest = 0.65//random(0.05, 0.65)
        this.friction = 0.01

        this.color = { x: random(0, 255), y: random(0, 255), z: random(0, 255) }

    }
    draw() {
        fill(this.color.x, this.color.y, this.color.z)
        ellipse(this.x, this.y, this.radius * 2)
    }
    update() {

        this.velx += this.accx
        this.vely += this.accy

        this.x += this.velx
        this.y += this.vely

        if (abs(this.vely) < 0.3) {
            this.vely = 0
        }

        if (abs(this.velx) < 0.3) {
            this.velx = 0
        }
    }

    applyFriction() {
        if ((!this.isAboveFloor()) && !(this.velx == 0)) {

            const sign = abs(this.velx) / this.velx
            if (sign) {
                this.velx -= sign * this.friction * gravity
            }


        }
    }
    applyGravity() {
        if (this.isAboveFloor()) {
            this.vely += gravity
        }



    }

    circleCollision(other, distR) {
        //Requies iterating logN times


        if (distR <= this.radius + other.radius + this.buffer + this.buffer) {
            const netMass = this.radius + other.radius
            const massDiff = this.radius - other.radius
            const prevX = this.velx
            const prevY = this.vely

            this.velx = (this.velx * (massDiff) + (2 * other.velx * other.radius)) / netMass
            this.vely = (this.vely * (massDiff) + (2 * other.vely * other.radius)) / netMass

            other.velx = ((2 * prevX * this.radius) - other.velx * (massDiff)) / netMass
            other.vely = ((2 * prevY * this.radius) - other.vely * (massDiff)) / netMass

            return true

        }

    }


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