class Ball {
    constructor(x, y, r) {
        const options = {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8
        }
        this.body = Bodies.circle(x, y, r, options);
        Composite.add(engine.world, this.body);
    }
}
