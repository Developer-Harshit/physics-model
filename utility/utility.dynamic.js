function configParticles() {
    for (var i = 0; i < random(2, 10); i++) {
        particles.push(new Planet())
    }

}
function initSketch() {

    particles = []
    mySliders = []
    cnv = createCanvas(10, 10);


    Utility.changeDim()
    cnv.parent('canvas-div')

    configParticles()

}


