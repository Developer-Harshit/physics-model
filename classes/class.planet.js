class Planet extends Particle {
    constructor(x, y, vx, vy, radius = 5) {
        super(x, y, vx, vy, radius)
        this.cRest = 0.5

    }
    applyGField(other, distR, dX, dY) {
        const magA = (universalG * this.radius * other.radius) / distR ** 2
        var accX = magA * dX
        var accY = magA * dY
        if (distR < 1 + this.radius + other.radius + this.buffer + other.buffer) {
            console.log('repel')
            accX *= -(this.cRest + other.cRest) / 2
            accY *= -(this.cRest + other.cRest) / 2
        }
        this.velx += accX
        this.vely += accY
        other.velx -= accX
        other.vely -= accY
    }
}