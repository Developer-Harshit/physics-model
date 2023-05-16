
function createParticle(mymode) {
    var cRandom = Math.floor(Math.random() * 7)
    console.log('Random color', cRandom)

    myParticles.length = 0
    Detector.clear(detector)

    for (let i = 0; i < iter; i++) {
        var aBody
        var rSize = (Math.random() * 30 + 10) * 150 / 500
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
        else if (mymode == '2') {

            aBody = new Fluid(
                Math.random() * matterContainer.clientWidth,
                Math.random() * matterContainer.clientHeight,
                7, cRandom)


        }

        myParticles.push(aBody.body)

    }

    Detector.setBodies(detector, myParticles)



}
