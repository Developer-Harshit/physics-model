class Fluid extends Particle {
    constructor(x, y, r, colorType = 0, isStatic) {
        super(
            {
                friction: 0.8,
                restitution: 0.6,
                isStatic

            },
            colorType
        )


        this.body = Bodies.circle(x, y, r, this.options);
        this.addToWorld()
    }

}