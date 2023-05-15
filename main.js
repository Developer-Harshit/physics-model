const matterContainer = document.querySelector("#matter-container");
var mode = '0'

const modes = ['ball', 'box']

const THICCNESS = 10000;
const scale = 0.6
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();
engine.gravity.y = 0.98

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




createParticle(mode)

createBorders()

var mouse = new Mouse()
mouse.removeListener()


// allow scroll through the canvas

// run the renderer
Render.run(render);


var state = 1
function draw() {
    window.requestAnimationFrame(draw)
    if (state == 1) {
        Engine.update(engine)

    }


}

draw()

// // create runner
// var runner = Runner.create();


// Runner.run(runner, engine);

