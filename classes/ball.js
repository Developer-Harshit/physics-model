class Ball extends Utility {
    constructor(x, y, r, colorType = 0, isFixed = false) {
        super(colorType)
        const render = {
            fillStyle: this.color,
            strokeStyle: this.color,
            lineWidth: 5
        }
        const options = {
            friction: 0.9,
            frictionAir: 0.00001,
            restitution: 0.9, isStatic: isFixed,
            render

        }
        this.body = Bodies.circle(x, y, r, options);
        this.body.color = this.color
        Composite.add(engine.world, this.body);
    }

}
