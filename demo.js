var cnv
const mySliders = []
function setSliders() {
    velX = new Slider('Velocity-x', 'slider-ol')
    velY = new Slider('Velocity-y', 'slider-ol')

    velX.addSlider(0, 100, 50)
    velY.addSlider(0, 100, 50)

    mySliders.push({ velX: velX.element })
    mySliders.push({ velY: velY.element })
}
function setup() {
    cnv = createCanvas(scaleCanvas * dim, scaleCanvas * dim);
    background(bgc);
    changeDim()
    cnv.parent('canvas-div')
    setSliders()

}
function windowResized() {
    changeDim()

}


function draw() {
    background(bgc);
}
