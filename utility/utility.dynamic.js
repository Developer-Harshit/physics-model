function configParticles() {
    twoBody()
    for (var i = 0; i < 3; i++) {
        particles.push(new Planet())
    }

}
function initSketch() {
    particles = []
    mySliders = []
    cnv = createCanvas(10, 10);
    background(bgc);


    Utility.changeDim()
    cnv.parent('canvas-div')

    configParticles()
    loop()
}


