
var mode = '0'
var blending = false
var intensity = 1 / 10 ** 10
function createParticle(mymode) {
    var cRandom = Math.floor(Math.random() * 4)

    myParticles.length = 0
    Detector.clear(detector)

    for (let i = 0; i < 50; i++) {
        var rSize = Math.random() * 20 + 10
        var aBody
        if (mymode == '0') {

            aBody = new Ball(
                Math.random() * matterContainer.clientWidth,
                Math.random() * matterContainer.clientHeight,
                rSize, cRandom)
        }
        else if (mymode == '1') {
            aBody = new Box(
                Math.random() * matterContainer.clientWidth,
                Math.random() * matterContainer.clientHeight,
                rSize * 2, rSize * 2, cRandom)
        }
        myParticles.push(aBody.body)

    }
    Detector.setBodies(detector, myParticles)



}
var ground
var leftWall
var rightWall
function createBorders() {
    ground = new Boundary(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2,
        27184,
        THICCNESS)

    leftWall = new Boundary(
        0 - THICCNESS / 2,
        matterContainer.clientHeight / 2,
        THICCNESS,
        matterContainer.clientHeight * 5,)

    rightWall = new Boundary(matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2,
        THICCNESS,
        matterContainer.clientHeight * 5,)

}