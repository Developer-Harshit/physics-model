class Joint {
    constructor(x, y, r) {
        const render = { visible: false }
        const options = {
            friction: 1,
            frictionAir: 0,
            restitution: 0,
            render
        }
        this.body = Bodies.circle(x, y, r, options);
        this.body.collisionFilter.group = -5
        Composite.add(engine.world, this.body);

    }

}

class Chain {
    constructor(bodyA, bodyB, stiffness) {
        //set of constraints
        //set of body
        this.bodyA = bodyA
        this.bodyB = bodyB

        this.length = findMag(subtractVectors(bodyA.position, bodyB.position))
        this.stiffness = stiffness
        this.dx = this.length
        this.bodies = []


    }
    createChain() {
        const unitDist = this.findDistUnit()
        ////////////////
        // some advanced distrubuting algorithm
        ////////////////
        const num = 15
        this.dx = this.length / num
        // this.dx = Math.random() * 10 + 5






        this.bodies.push(this.bodyA.position)
        var first = this.bodyA


        for (let i = 1; i < num; i++) {
            const x = this.bodyA.position.x + unitDist.x * i * this.dx
            const y = this.bodyA.position.y + unitDist.y * i * this.dx

            const joint = new Joint(x, y, 1)
            this.createConstraint(first, joint.body)

            first = joint.body
            this.bodies.push(first.position)

        }
        this.createConstraint(first, this.bodyB)
        this.bodies.push(this.bodyB.position)



    }
    createConstraint(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,

            length: this.dx,
            stiffness: this.stiffness
        }
        var constraint = Constraint.create(options)
        constraint.render.visible = false
        Composite.add(engine.world, constraint)

    }
    distribute() {

    }
    draw(ctx) {
        const curvePoints = getCurvePoints(this.bodies, 0.8, 150, true)
        for (var i = 0; i < curvePoints.length - 1; i++) {
            drawLine(ctx, curvePoints[i], curvePoints[i + 1])

        }
    }
    update() {

    }
    findDistUnit = function () {
        const dist = subtractVectors(this.bodyA.position, this.bodyB.position)
        const unitDist = findUnit(dist)
        return unitDist

    }

}