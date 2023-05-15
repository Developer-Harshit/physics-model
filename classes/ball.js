class Ball extends Utility {
    constructor(x, y, r, colorType = 0) {
        super(colorType)
        const render = {
            fillStyle: this.color,
            strokeStyle: this.color,
            lineWidth: 5
        }
        const options = {
            friction: 1,
            frictionAir: 0.0001,
            restitution: 0.9,
            render

        }
        this.body = Bodies.circle(x, y, r, options);

        Composite.add(engine.world, this.body);
    }

}
