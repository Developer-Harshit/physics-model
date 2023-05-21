class Ball extends Particle {
    constructor(x, y, r, colorType = 0, isStatic) {
        super(
            {
                friction: 0.9,
                restitution: 0.9,
                isStatic,
            },
            colorType)

        this.body = Bodies.circle(x, y, r, this.options);
        this.addToWorld()
    }

}
