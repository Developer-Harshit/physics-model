class Box extends Particle {
    constructor(x, y, w, h, colorType, isStatic) {
        super(
            {
                friction: 0.3,
                restitution: 0,
                isStatic
            },
            colorType
        )


        this.body = Bodies.rectangle(x, y, w, h, this.options);
        this.addToWorld()
    }

}