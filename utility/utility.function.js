var scaleCanvas
var pScale
function changeDim() {

    pScale = scaleCanvas
    if (outerWidth < outerHeight) {
        scaleCanvas = Math.floor(outerWidth / dim) - 6
    } else {
        scaleCanvas = Math.floor(outerHeight / dim) - 6
    }

    resizeCanvas(scaleCanvas * dim, scaleCanvas * dim)
}
var accx
var accy



