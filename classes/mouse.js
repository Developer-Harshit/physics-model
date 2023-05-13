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
}
