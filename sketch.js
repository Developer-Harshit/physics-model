var cnv
var Engine = Matter.Engine,
    // Render = Matter.Render,
    Bodies = Matter.Bodies,
    Body = Matter.Body
Composite = Matter.Composite;

// create an engine
var engine
var world
//bodies
var boxA
var boxB
var ground

var objects = []
function setup() {
    cnv = createCanvas(1000, 1000)
    Utility.changeDim()
    cnv.parent('canvas-div')


    engine = Engine.create()
    world = engine.world
    boxA = new PRectangle(width / 2, 10, 20, 20)
    ground = new PRectangle(width / 2, height, width, 100, { isStatic: true });
    objects.push(...[boxA, ground])

    // add all of the bodies to the world



}
// function mouseDragged() {
//     objects.push(new PRectangle(mouseX, mouseY, 20, 20))
// }
function windowResized() {
    Utility.changeDim()
    objects.forEach(myBody => {
        myBody.resizeDim(scaleCanvas, pScale)
    });


}

function mouseDragged() {
    objects.push(new PRectangle(mouseX, mouseY, 20, 20))
}
function keyPressed() {
    try {
        objects[0].deleteBody()
        objects.splice(0, 1)

    } catch (e) {
        console.log(e.message)
    }
}
function draw() {
    background(bgc);
    Engine.update(engine, 10)
    rectMode(CENTER)


    objects.forEach(myBody => {
        myBody.draw()
        // console.log(myBody.dim, myBody.findDim())
    });

}