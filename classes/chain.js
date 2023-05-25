class Chain extends Particle {
  constructor(bodyA, bodyB, stiffness) {
    super();

    this.bodyA = bodyA;
    this.bodyB = bodyB;

    this.length = findMag(subtractVectors(bodyA.position, bodyB.position));
    this.stiffness = stiffness;
    this.dx = this.length;
    this.bodies = [];
  }
  createChain() {
    const unitDist = this.findDistUnit();
    ////////////////
    // some advanced distrubuting algorithm
    ////////////////
    const num = 15;
    this.dx = this.length / num;

    this.bodies.push(this.bodyA.position);
    var first = this.bodyA;

    for (let i = 1; i < num; i++) {
      const x = this.bodyA.position.x + unitDist.x * i * this.dx;
      const y = this.bodyA.position.y + unitDist.y * i * this.dx;

      const joint = new Joint(x, y, 1);
      this.createConstraint(first, joint.body);

      first = joint.body;
      this.bodies.push(first.position);
    }
    this.createConstraint(first, this.bodyB);
    this.bodies.push(this.bodyB.position);
  }
  createConstraint(bodyA, bodyB) {
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      length: this.dx,
      stiffness: this.stiffness,
      render: { visible: false },
    };
    var constraint = Constraint.create(options);
    this.addToWorld(constraint);
  }
  distribute() {}
  draw(ctx) {
    const curvePoints = getCurvePoints(this.bodies, 0.8, 7, true);

    for (var i = 0; i < curvePoints.length - 1; i++) {
      drawLine(ctx, curvePoints[i], curvePoints[i + 1], 1);
    }
  }

  findDistUnit = function () {
    const dist = subtractVectors(this.bodyA.position, this.bodyB.position);
    const unitDist = findUnit(dist);
    return unitDist;
  };
}
