engine.gravity.y = 0.98

createParticle(mode)

assignSetting()

createBorders()

var mouse = new Mouse()

// allow scroll through the canvas
mouse.removeListener()

// run the renderer
Render.run(render);

function draw() {
    window.requestAnimationFrame(draw)

    if (state == 1) {

        Engine.update(engine)
        c.fillStyle = '#fff'
        for (const cstObj of myConstraints) {
            cstObj.draw(c)
        }

        if (blending) {
            mouse.hasParticle(rColor)
            const collisions = Detector.collisions(detector)
            const collisionPairs = collisions.map(a => [a.bodyA, a.bodyB]);
            mixColor(collisionPairs, intensity)
        }
    }
}

draw()

