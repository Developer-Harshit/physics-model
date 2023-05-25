class Ball extends Particle {
  constructor(x, y, r, colorType = 0, isStatic) {
    super(
      {
        friction: 0.9,
        restitution: 0.9,
        isStatic,
      },
      colorType
    );

    this.body = Bodies.circle(x, y, r, this.options);
    this.addToWorld();
  }
}

class Box extends Particle {
  constructor(x, y, w, h, colorType, isStatic) {
    super(
      {
        friction: 0.3,
        restitution: 0,
        isStatic,
      },
      colorType
    );

    this.body = Bodies.rectangle(x, y, w, h, this.options);
    this.addToWorld();
  }
}

class Fluid extends Particle {
  constructor(x, y, r, colorType = 0, isStatic) {
    super(
      {
        friction: 0.8,
        restitution: 0.6,
        isStatic,
      },
      colorType
    );

    this.body = Bodies.circle(x, y, r, this.options);
    this.addToWorld();
  }
}

class Joint extends Particle {
  constructor(x, y, r) {
    super({
      friction: 1,
      frictionAir: 0,
      restitution: 0,
    });

    this.body = Bodies.circle(x, y, r, this.options);

    this.body.render.visible = false;
    this.body.collisionFilter.group = -5;

    this.addToWorld();
  }
}

class Boundary {
  constructor(x, y, w, h) {
    const options = { isStatic: true };
    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(engine.world, this.body);
  }
  respose(x, y) {
    Matter.Body.setPosition(this.body, Matter.Vector.create(x, y));
  }
}
