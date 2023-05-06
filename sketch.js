var cnv
var scaleCanvas
const mySliders = []
function setup() {
  cnv = createCanvas(scaleCanvas * dim, scaleCanvas * dim);
  background(bgc);
  changeDim()
  cnv.parent('canvas-div')
  s = new Slider('Velocity', 'slider-ol')
  s.addSlider(0, 100, 50)
}
function windowResized() {
  changeDim()

}


function draw() {
  background(bgc);
}
