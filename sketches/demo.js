var cnv
const mySliders = []
const particles = []
var p

function configParticles() {
    p = new Particle()

}
function setup() {
    cnv = createCanvas(10, 10);
    background(bgc);

    setSliders()
    changeDim()
    cnv.parent('canvas-div')

    configParticles()

    mySliders.velx.input(function () {
        p.velx = mySliders.velx.value()

    })
    mySliders.vely.input(function () {
        p.vely = mySliders.vely.value()

    })
    mySliders.accx.input(function () {
        p.accx = mySliders.accx.value()

    })
    mySliders.accy.input(function () {
        p.accy = mySliders.accy.value()

    })


}
function windowResized() {
    changeDim()
    p.fixResize(scaleCanvas, pScale)



}


function draw() {
    background(bgc);
    p.draw()

    p.accx = mySliders.accx.value() / p.mass
    p.accy = mySliders.accy.value() / p.mass
    p.wallCollide()

    p.update()

}