class PRectangle {
    constructor(x, y, w, h, op = {}) {
        this.body = Bodies.rectangle(x, y, w, h, op)
        Composite.add(world, this.body);
        this.dim = { w, h }
        this.color = [255, 200]
    }
    draw() {
        fill(...this.color)
        rect(this.body.position.x, this.body.position.y, this.dim.w, this.dim.h)
    }
    deleteBody() {
        Composite.remove(world, this.body)
    }
}