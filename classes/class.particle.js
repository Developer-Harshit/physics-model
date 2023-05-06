class Particle {
    constructor(mass = 10) {
        this.x = random(0, width)
        this.y = random(0, height)
        this.velx = 0
        this.vely = 0
        this.accx = 0
        this.accy = 0
        this.mass = mass
    }
    draw() {
        fill(240)
        ellipse(this.x, this.y, this.mass)
    }
    update() {

        this.velx += this.accx
        this.vely += this.accy
        this.x += this.velx
        this.y += this.vely
    }
    wallCollide() {

    }
    isColliding() {

    }
}