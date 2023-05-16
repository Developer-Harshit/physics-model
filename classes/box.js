class Box extends Utility {
    constructor(x, y, w, h, colorType = 1) {
        super(colorType)
        const render = {
            fillStyle: this.color,
            strokeStyle: this.color,
            lineWidth: 1
        }
        const options = {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0, render
        }
        this.body = Bodies.rectangle(x, y, w, h, options);

        Composite.add(engine.world, this.body);
    }

}