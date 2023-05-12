class Particle {
    constructor(
        x = random(0, width),
        y = random(0, height),
        vx = random(-rVect, rVect),
        vy = random(-rVect, rVect),
        radius = (random([random(
            random(3, 10),
            random(10, 30)),
        random(7, random(7, 25)),
        random(3, 7)]))
    ) {
        this.x = x
        this.y = y

        this.buffer = 0.0

        this.velx = vx
        this.vely = vy

        this.accx = 0
        this.accy = 0

        this.vMax = 0
        this.aMax = 0

        this.radius = radius

        this.cRest = random(0.05, 0.55)
        this.friction = 0.01

        this.color = { x: random(50, 255), y: random(50, 255), z: random(50, 255) }

    }
    draw() {
        stroke(255)
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


        if (distR <= this.radius + other.radius + this.buffer + other.buffer) {
            const netMass = this.radius + other.radius
            const massDiff = this.radius - other.radius
            const prevX = this.velx
            const prevY = this.vely

            this.velx = (this.velx * (massDiff) + (2 * other.velx * other.radius)) / netMass
            this.vely = (this.vely * (massDiff) + (2 * other.vely * other.radius)) / netMass

            other.velx = ((2 * prevX * this.radius) - other.velx * (massDiff)) / netMass
            other.vely = ((2 * prevY * this.radius) - other.vely * (massDiff)) / netMass

            // if (this.x + this.radius >= other.x - other.radius) {

            //     this.x = other.x - other.radius
            //     other.x += 1


            // } else if (this.x - this.radius <= other.x + other.radius) {
            //     // other.x = this.x - this.radius + 1

            //     this.x = other.x + other.radius
            // }
            // if (this.y + this.radius >= other.y - other.radius) {

            //     this.y = other.y - other.radius

            // } else if (this.y - this.radius <= other.y + other.radius) {
            //     other.y = this.y - this.radius

            // }
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