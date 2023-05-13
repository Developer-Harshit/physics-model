
var scaleCanvas
var pScale
var pScale
var pHeight
//Basic
const dim = 16
const bgc = 21
class Utility {
    constructor() { }
    static changeDim() {

        pScale = scaleCanvas
        if (outerWidth < outerHeight) {
            scaleCanvas = Math.floor(outerWidth / dim) - 6
        } else {
            scaleCanvas = Math.floor(outerHeight / dim) - 6
        }
        pHeight = height
        resizeCanvas(scaleCanvas * dim, scaleCanvas * dim)

    }

    static startSketch() {
        loop()
    }
    static stopSketch() {
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

