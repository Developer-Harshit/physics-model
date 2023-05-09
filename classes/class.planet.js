class Planet extends Particle {
    constructor(vx = random(-rVect, rVect), vy = random(-rVect, rVect), radius = random(5, 12)) {
        super(vx, vy, radius)
        this.cRest = 1

    }
    applyGField(other, distR, dX, dY) {
        const magA = (universalG * this.radius * other.radius) / distR ** 2
        var accX = magA * dX
        var accY = magA * dY
        if (distR < 5 + this.radius + other.radius + this.buffer + this.buffer) {
            accX *= -1
            accY *= -1
        }
        this.velx += accX
        this.vely += accY
        other.velx -= accX
        other.vely -= accY




    }
}