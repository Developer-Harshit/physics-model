const matterContainer = document.querySelector("#matter-container");
const THICCNESS = 1000;

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
    }
});

class Ball {
    constructor(x, y, r) {
        const options = {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8
        }
        this.body = Bodies.circle(x, y, r, options);
        Composite.add(engine.world, this.body);
    }
}

class Boundary {
    constructor(x, y, w, h) {
        const options = { isStatic: true }
        this.body = Bodies.rectangle(x, y, w, h, options)
        Composite.add(engine.world, this.body)
    }
    respose(x, y) {
        Matter.Body.setPosition(
            this.body,
            Matter.Vector.create(x, y)
        );
    }
}
class Mouse {

}
for (let i = 0; i < 100; i++) {
    var circle = new Ball(i, 10, Math.random() * 30 + 10)

}

var ground = new Boundary(
    matterContainer.clientWidth / 2,
    matterContainer.clientHeight + THICCNESS / 2,
    27184,
    THICCNESS)

var leftWall = new Boundary(
    0 - THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight * 5,)

var rightWall = new Boundary(matterContainer.clientWidth + THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight * 5,)



var mouseBody = new Mouse()
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);

// allow scroll through the canvas
mouseConstraint.mouse.element.removeEventListener(
    "mousewheel",
    mouseConstraint.mouse.mousewheel
);
mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    mouseConstraint.mouse.mousewheel
);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function handleResize(matterContainer) {
    // set canvas size to new values
    render.canvas.width = matterContainer.clientWidth;
    render.canvas.height = matterContainer.clientHeight;

    // reposition ground
    ground.respose(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2
    )


    // reposition right wall
    rightWall.respose(
        matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2
    )

}

window.addEventListener("resize", () => handleResize(matterContainer))