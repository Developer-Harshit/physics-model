class PRectangle {
    constructor(x, y, w, h, op = {}) {
        this.body = Bodies.rectangle(x, y, w, h, op)
        Composite.add(world, this.body);
        this.dim = { w, h }
        this.color = [255, 200]

    }
    draw() {
        fill(...this.color)
        var x = this.body.position.x
        var y = this.body.position.y
        rect(x, y, this.dim.w, this.dim.h)
    }
    deleteBody() {
        Composite.remove(world, this.body)
    }
    findDistance(v1, v2) {
        var x = abs(v1.x - v2.x)
        var y = abs(v1.y - v2.y)
        return (x ** 2 + y ** 2) ** 0.5

    }
    findDim() {
        var ver1 = this.body.vertices[0],
            ver2 = this.body.vertices[1],
            ver3 = this.body.vertices[2]

        return {
            w: this.findDistance(ver1, ver2),
            h: this.findDistance(ver2, ver3)
        }
    }
    setDim() {

        const dim = this.findDim()
        this.dim.w = dim.w
        this.dim.h = dim.h
    }
    resizeDim(winScale, prevScale) {


        console.log(winScale, prevScale)
        const ratio = winScale / prevScale
        var x = this.body.position.x
        var y = this.body.position.y
        x *= ratio
        y *= ratio

        Body.scale(boxA.body, ratio, ratio)
        this.setDim()


        Body.setPosition(this.body, { x, y })


    }
}