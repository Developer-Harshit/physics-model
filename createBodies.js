var ground
var leftWall
var rightWall
function createParticle(mymode) {
    var cRandom = Math.floor(Math.random() * 4)
    for (let i = 0; i < 100; i++) {
        var rSize = Math.random() * 20 + 5
        if (mymode == '0') {

            var ball = new Ball(i,
                Math.random() * matterContainer.clientHeight / 4,
                rSize, cRandom)
        }
        else if (mymode == '1') {
            var box = new Box(i,
                Math.random() * matterContainer.clientHeight / 4,
                rSize * 2, rSize * 2, cRandom)
        }

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