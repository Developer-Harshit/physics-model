class Planet extends Particle {
    constructor(x, y, vx, vy, radius) {
        super(x, y, vx, vy, radius)
        this.gRest = random(0.8, 1)
        // this.cRest = 1


    }
    applyGField(other, distR, dX, dY, mode) {
        const magA = (universalG * this.radius * other.radius) / distR ** 2
        var accX = magA * dX
        var accY = magA * dY

        if (distR < this.radius + other.radius + this.buffer + other.buffer) {
            console.log('repel')
            accX *= -(this.gRest + other.gRest) / 2
            accY *= -(this.gRest + other.gRest) / 2
            this.velx += accX
            this.vely += accY
            other.velx -= accX
            other.vely -= accY

        }

        this.velx += accX
        this.vely += accY
        other.velx -= accX
        other.vely -= accY
    }

}