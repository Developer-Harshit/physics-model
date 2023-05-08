var cnv
const mySliders = []
const particles = []

function configParticles() {
    p = new Particle()
    particles.push(p)

}
function setup() {
    cnv = createCanvas(10, 10);
    background(bgc);

    setSliders()
    changeDim()
    cnv.parent('canvas-div')

    configParticles()

}
function windowResized() {
    changeDim()

}
function draw() {
    background(bgc);
    for (p of particles) {
        p.draw()
        p.velx = mySliders.velx.value()
        p.vely = mySliders.vely.value()
        p.accx = mySliders.accx.value() / p.mass
        p.accy = mySliders.accy.value() / p.mass

        p.update()
    }

}
