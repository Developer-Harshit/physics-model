class Joint {
    constructor(x, y, r) {
        const render = { visible: false }
        const options = {
            friction: 1,
            frictionAir: 0,
            restitution: 1,
            render
        }
        this.body = Bodies.circle(x, y, r, options);

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


    }
    createChain() {
        const unitDist = this.findDistUnit()
        ////////////////
        // some advanced distrubuting algorithm
        ////////////////
        const num = 30
        this.dx = this.length / num


        console.log(this.length, this.dx)




        var first = this.bodyA

        for (let i = 1; i < num; i++) {
            const x = this.bodyA.position.x + unitDist.x * i * this.dx
            const y = this.bodyA.position.y + unitDist.y * i * this.dx

            const joint = new Joint(x, y, 12)
            this.createConstraint(first, joint.body)

            first = joint.body

        }
        this.createConstraint(first, this.bodyB)



    }
    createConstraint(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
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