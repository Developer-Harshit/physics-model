Particle.prototype.fixResize = function (winScale, prevScale) {
    const ratio = winScale / prevScale
    this.x *= ratio
    this.y *= ratio
    this.velx *= ratio
    this.vely *= ratio
    this.accx *= ratio
    this.accy *= ratio
    this.radius *= ratio

}

Particle.prototype.isAboveFloor = function () {
    return abs(this.y + this.radius - height) > 1
}

Particle.prototype.findDistance = function (other, modeVect = false) {
    const xDist = other.x - this.x
    const yDist = other.y - this.y
    const myDist = ((xDist ** 2) + (yDist ** 2)) ** (0.5)
    if (modeVect) {

        return { mag: myDist, x: xDist, y: yDist }
    } else return myDist

}

Particle.prototype.noborderCollide = function () {
    var result = false
    if (this.x < 0 - this.buffer) {
        this.x = width
        result = true
    } else if (this.x > width + this.buffer) {
        this.x = 0
        result = true
    }
    if (this.y > height + this.buffer) {
        this.y = 0
        result = true
    } else if (this.y < 0 - this.buffer) {
        this.y = height
        result = true
    }
    return result
}
Particle.prototype.borderCollide = function () {

    var result = false
    if (this.velx <= 0 && this.x - this.radius <= 0) {

        this.velx *= - this.cRest

        this.x = 0 + this.radius
        result = true


    } else if (this.velx >= 0 && this.x + this.radius >= width) {
        this.x = width - this.radius

        this.velx *= - this.cRest
        result = true

    }
    if (this.vely >= 0 && this.y + this.radius >= height) {
        this.vely *= - this.cRest
        this.y = height - this.radius


        result = true
    } else if (this.vely <= 0 && this.y - this.radius <= 0) {
        this.vely *= -this.cRest
        this.y = 0 + this.radius

        result = true

    }

    return result
} 