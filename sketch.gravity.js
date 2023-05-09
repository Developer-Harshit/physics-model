var cnv
const mySliders = []
const particles = []

function configParticles() {
    for (var i = 0; i < 3; i++) {
        particles.push(new Particle())
    }

}
function setup() {
    cnv = createCanvas(10, 10);
    background(bgc);


    changeDim()
    cnv.parent('canvas-div')

    configParticles()



}
function windowResized() {
    changeDim()
    for (const p of particles) {

        p.fixResize(scaleCanvas, pScale)
    }
}


function draw() {
    background(bgc);

    for (let i = 0; i < particles.length; i++) {
        // for (const p of particles) {
        const p = particles[i]
        p.draw()

        p.update()
        p.wallCollide('Border')
        for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            if (other == p) {
                break
            }
            p.circleCollision(other)

        }


        p.applyFriction()
        // p.applyGravity()
    }

}