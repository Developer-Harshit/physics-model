class Boundary {
    constructor(x, y, w, h) {
        const options = { isStatic: true }
        this.body = Bodies.rectangle(x, y, w, h, options)
        Composite.add(engine.world, this.body)
    }
    respose(x, y) {
        Matter.Body.setPosition(
            this.body,
            Matter.Vector.create(x, y)
        );
    }
}
