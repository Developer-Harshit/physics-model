var cnv
const mySliders = []
const particles = []

function configParticles() {
    for (var i = 0; i < 5; i++) {
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
        print(p)
        p.fixResize(scaleCanvas, pScale)
    }
}


function draw() {
    background(bgc);
    for (const p of particles) {
        p.draw()

        p.update()
        p.wallCollide('Border')
    }

}