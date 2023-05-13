var cnv
var scaleCanvas

function setup() {
  cnv = createCanvas(scaleCanvas * dim, scaleCanvas * dim);
  background(bgc);
  changeDim()
  cnv.parent('canvas-div')
}
function windowResized() {
  changeDim()

}


function draw() {
  background(bgc);
}
