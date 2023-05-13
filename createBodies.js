var ground
var leftWall
var rightWall
function createParticle() {
    var cRandom = Math.floor(Math.random() * 4)
    console.log(cRandom)
    for (let i = 0; i < 100; i++) {
        var circle = new Ball(i,
            Math.random() * matterContainer.clientHeight / 4,
            20, cRandom)

    }

}
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