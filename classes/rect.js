class Rect {
    constructor(x, y, w, h) {
        const options = {
            friction: 0.1,
            frictionAir: 0.00001,
            restitution: 0.7
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        Composite.add(engine.world, this.body);
    }
}