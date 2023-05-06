var scaleCanvas
function changeDim() {
    if (innerWidth < innerHeight) {
        scaleCanvas = Math.floor(innerWidth / dim) - 2
    } else {
        scaleCanvas = Math.floor(innerHeight / dim) - 2
    }

    resizeCanvas(scaleCanvas * dim, scaleCanvas * dim)
}



