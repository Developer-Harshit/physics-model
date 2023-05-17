class Mouse {
    constructor() {
        let mouse = Matter.Mouse.create(render.canvas);
        const constraint = {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
        this.body = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint
        });
        Composite.add(engine.world, this.body);

    }
    removeListener() {
        this.body.mouse.element.removeEventListener(
            "mousewheel",
            this.body.mouse.mousewheel
        );
        this.body.mouse.element.removeEventListener(
            "DOMMouseScroll",
            this.body.mouse.mousewheel
        );

    }
    hasParticle() {
        const sticked = this.body.body
        if (!sticked) {
            return
        }
        if (sticked.color) {
            console.log('defined', sticked.color)
        } else {
            sticked.color = '#000'
        }
        color1 = sticked.render.fillStyle
        color2 = '#ffffff'
        sticked.render.fillStyle = blend_colors(color1, color2, 0.06)
        sticked.render.strokeStyle = blend_colors(color1, color2, 0.001)
    }
}
