class Fluid extends Utility {
    constructor(x, y, r, colorType = 0) {
        super(colorType)
        const render = {
            fillStyle: this.color,
            strokeStyle: this.color,
            lineWidth: 5
        }
        const options = {
            friction: 0.8,
            frictionAir: 0.000001,
            restitution: 0.6,
            render

        }
        this.body = Bodies.circle(x, y, r, options);
        this.body.color = this.color
        Composite.add(engine.world, this.body);
    }

}