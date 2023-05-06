var scaleCanvas
function changeDim() {
    if (innerWidth < innerHeight) {
        scaleCanvas = Math.floor(innerWidth / dim) - 4
    } else {
        scaleCanvas = Math.floor(innerHeight / dim) - 4
    }

    resizeCanvas(scaleCanvas * dim, scaleCanvas * dim)
}
var accx
var accy

function setSliders() {
    accx = new Slider('acc-x', 'slider-ol')
    accy = new Slider('acc-y', 'slider-ol')

    accx.addSlider(-5.0, 5.0, 0, 0.0001)
    accy.addSlider(-5.0, 5.0, 0, 0.0001)

    mySliders.accx = accx.element
    mySliders.accy = accy.element

    velx = new Slider('vel-x', 'slider-ol')
    vely = new Slider('vel-y', 'slider-ol')

    velx.addSlider(-20, 20, 0, 0.01)
    vely.addSlider(-20, 20, 0, 0.01)

    mySliders.velx = velx.element
    mySliders.vely = vely.element


}


