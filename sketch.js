var cnv
var Engine = Matter.Engine,
    // Render = Matter.Render,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine
var world
var yeet = false
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
    boxA = new PRectangle(20, 10, 20, 20)
    ground = new PRectangle(width / 2, height, width, 10, { isStatic: true });
    objects.push(...[boxA, ground])

    // add all of the bodies to the world



}
// function mouseDragged() {
//     objects.push(new PRectangle(mouseX, mouseY, 20, 20))
// }
function windowResized() {
    Utility.changeDim()
    for (; ;) { }


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
    Engine.update(engine, 15)
    rectMode(CENTER)
    // stroke(255)
    // fill(100, 100)
    // ellipse(100, 100, 50, 50)
    // rect(boxA.body.position.x, boxA.body.position.y, 80, 80)
    objects.forEach(myBody => {
        myBody.draw()
    });

}