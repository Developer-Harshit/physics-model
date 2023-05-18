class Joint {
    constructor(x, y, r) {
        const render = { visible: true }
        const options = {
            friction: 0.9,
            frictionAir: 0.00001,
            restitution: 0.9,
            render
        }
        this.body = Bodies.circle(x, y, r, options);
        Composite.add(engine.world, this.body);
        this.body.collisionFilter.group = -1

    }

}

class Chain {
    constructor(bodyA, bodyB, length, stiffness) {
        //set of constraints
        //set of body
        this.bodyA = bodyA
        this.bodyB = bodyB
        // this.length = length
        this.length = findMag(subtractVectors(bodyA.position, bodyB.position))
        this.stiffness = stiffness
        this.dx = this.length
    }
    createChain() {
        const unitDist = this.findDistUnit()
        ////////////////
        // some advanced distrubuting algorithm
        ////////////////
        const num = 20
        this.dx = this.length / num






        var first = this.bodyA

        for (let i = 1; i < num; i++) {
            const x = this.bodyA.position.x + unitDist.x * i * this.dx
            const y = this.bodyA.position.y + unitDist.y * i * this.dx

            const joint = new Joint(x, y, 2)
            var options = {
                bodyA: first,
                bodyB: joint.body,
                length: this.dx,
                stiffness: this.stiffness
            }
            var constraint = Constraint.create(options)
            Composite.add(engine.world, constraint)
            first = joint.body




        }
        var options = {
            bodyA: first,
            bodyB: this.bodyB,
            length: this.dx,
            stiffness: this.stiffness
        }
        var constraint = Constraint.create(options)
        Composite.add(engine.world, constraint)




    }
    distribute() {

    }
    draw() {

    }
    update() {

    }
    findDistUnit = function () {
        const dist = subtractVectors(this.bodyA.position, this.bodyB.position)


        const unitDist = findUnit(dist)
        return unitDist

    }

}