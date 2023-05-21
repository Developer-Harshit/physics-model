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