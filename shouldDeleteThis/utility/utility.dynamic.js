function configParticles() {
    for (var i = 0; i < random(1000, 4000); i++) {
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


