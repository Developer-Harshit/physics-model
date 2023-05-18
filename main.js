
// module aliases

// create an engine
var engine = Engine.create();
engine.gravity.y = 0.98

// create a renderer
var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
    }
});

var detector = Detector.create()




createParticle(mode)



assignSetting()

createBorders()

var mouse = new Mouse()
mouse.removeListener()


// allow scroll through the canvas

// run the renderer
Render.run(render);


var state = 1

function draw() {
    window.requestAnimationFrame(draw)

    if (state == 1) {
        Engine.update(engine)

        if (blending) {
            mouse.hasParticle(cRandom)
            const collisions = Detector.collisions(detector)
            const collisionPairs = collisions.map(a => [a.bodyA, a.bodyB]);

            mixColor(collisionPairs, intensity)
        }

    }




}

draw()

// // create runner
// var runner = Runner.create();


// Runner.run(runner, engine);

