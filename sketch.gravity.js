var cnv
const mySliders = []
const particles = []



function configParticles() {
    fourBody()
    for (var i = 0; i < 1; i++) {
        particles.push(new Planet())
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
        const p = particles[i]
        p.draw()

        p.applyFriction()
        // p.applyGravity()

        for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            if (other == p) {
                break
            }
            const distance = p.findDistance(other, true)
            // p.circleCollision(other, distance.mag)
            p.applyGField(other, distance.mag, distance.x, distance.y)



        }
        p.update()
        p.wallCollide('Border')


    }

}