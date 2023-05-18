
var rColor
function createParticle(mymode) {
    rColor = Math.floor(Math.random() * 7)


    myParticles.length = 0
    Detector.clear(detector)

    for (let i = 0; i < iter; i++) {
        var aBody = undefined
        var rSize = (Math.random() * 30 + 10) * 150 / 500

        var rWidth = Math.random() * matterContainer.clientWidth
        var rHeight = Math.random() * matterContainer.clientHeight
        if (mymode == '0') {

            aBody = new Ball(
                rWidth,
                rHeight,
                rSize, rColor)
        }
        else if (mymode == '1') {
            aBody = new Box(
                rWidth,
                rHeight,
                rSize * 2, rSize * 2, rColor)
        }
        else if (mymode == '2') {

            aBody = new Fluid(
                rWidth,
                rHeight,
                7, rColor)


        }
        else if (mymode == '3') {
            aBody = new Ball(
                matterContainer.clientWidth / 2,
                40,
                12, rColor)

            var bBody = new Ball(
                rWidth,
                rHeight,
                12, rColor)
            myParticles.push(bBody.body)
            const chain = new Chain(aBody.body, bBody.body, 0.9)

            chain.createChain()

        }
        if (aBody) {

            myParticles.push(aBody.body)
        }

    }

    Detector.setBodies(detector, myParticles)



}
