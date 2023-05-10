function twoBody() {
    const p1 = new Planet(width / 2, height / 2)
    const p2 = new Planet()
    p1.radius = 10
    p1.update = function () {
        this.velx = 1
        this.vely = 1
        return
    }
    particles.push(p1)
    particles.push(p2)

}
function threeBody() {
    var p1 = new Planet()
    var p2 = new Planet()
    var p3 = new Planet()
    const r = 70

    p1.x = width / 2
    p1.y = height / 2

    p2.x = width / 2 - r
    p2.y = height / 2 + (r * 3 ** 0.5)

    p3.x = width / 2 + r
    p3.y = height / 2 + (r * 3 ** 0.5)
    particles.push(p1)
    particles.push(p2)
    particles.push(p3)
}
function fourBody() {
    var p1 = new Planet()
    var p2 = new Planet()
    var p3 = new Planet()
    var p4 = new Planet()
    const r = 140 / 2

    p1.x = width / 2 - r
    p1.y = height / 2 - r

    p2.x = width / 2 + r
    p2.y = height / 2 - r

    p3.x = width / 2 - r
    p3.y = height / 2 + r

    p4.x = width / 2 + r
    p4.y = height / 2 + r
    particles.push(p1)
    particles.push(p2)
    particles.push(p3)
    particles.push(p4)
}