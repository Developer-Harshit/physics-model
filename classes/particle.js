class Particle {
    constructor(options, colorType) {
        // this.body = 
        if (!options) {
            return
        }
        this.color = selectColor(colorType)
        this.render = {
            fillStyle: this.color,
            strokeStyle: this.color,
            lineWidth: 1
        }
        this.options = {
            ...options,
            frictionAir: 0.00001,

            render: this.render

        }
        this.chains = []
    }
    addToWorld(body) {
        if (!body) {
            Composite.add(engine.world, this.body);

        } else {
            Composite.add(engine.world, body);
        }
    }
}

// helper\setup.js helper\canvasFunc.js helper\vector.js helper\calcCurve.js helper\blendColor.js classes\utility.js classes\particle.js classes\boundary.js classes\mouse.js classes\box.js classes\ball.js classes\fluid.js classes\chain.js createStuff\createBodies.js createStuff\createBorders.js handle\handleResize.js handle\handleForm.js handle\handleLoop.js main.js