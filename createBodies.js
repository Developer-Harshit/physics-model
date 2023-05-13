var ground
var leftWall
var rightWall
function createParticle() {
    for (let i = 0; i < 10; i++) {
        var circle = new Rect(i,
            Math.random() * matterContainer.clientHeight / 4,
            50, 50)

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