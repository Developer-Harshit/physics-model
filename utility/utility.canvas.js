var scaleCanvas
var pScale
class Utility {
    constructor() { }
    static changeDim() {

        pScale = scaleCanvas
        if (outerWidth < outerHeight) {
            scaleCanvas = Math.floor(outerWidth / dim) - 6
        } else {
            scaleCanvas = Math.floor(outerHeight / dim) - 6
        }

        resizeCanvas(scaleCanvas * dim, scaleCanvas * dim)
    }
    static startSketch() {
        looping = true
        loop()
    }
    static stopSketch() {
        looping = false
        noLoop()
    }
    static resetCnv() {
        initSketch()
        loop()


    }
}
function configButton() {
    const resetButton = select('#reset-btn')
    resetButton.mouseClicked(Utility.resetCnv)

    const startButton = select('#start-btn')
    startButton.mouseClicked(Utility.startSketch)

    const stopButton = select('#stop-btn')
    stopButton.mouseClicked(Utility.stopSketch)
}





