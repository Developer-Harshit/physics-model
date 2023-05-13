var cnv
var particles
var mySliders
var looping = false
function setup() {
    initSketch()
    Utility.changeDim()
    configButton()


}
function windowResized() {
    Utility.changeDim()

    for (const p of particles) {

        p.fixResize(scaleCanvas, pScale)
    }


}

function draw() {



    background(bgc);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.draw()

        p.update()
        var isColliding = false
        for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            if (other == p) {
                break
            }
            const distance = p.findDistance(other, true)
            const result = p.circleCollision(other, distance.mag)
            if (result) {
                isColliding = true
            }
            // p.applyGField(other, distance.mag, distance.x, distance.y)



        }
        p.wallCollide('Border')
        p.applyFriction()
        p.applyGravity(isColliding)


        Utility.setLoop()


    }


}