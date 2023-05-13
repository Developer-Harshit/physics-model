const matterContainer = document.querySelector("#matter-container");


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




createParticle()

createBorders()


var mouse = new Mouse()
mouse.removeListener()


// allow scroll through the canvas

// run the renderer
Render.run(render);


function draw() {
    window.requestAnimationFrame(draw)
    Engine.update(engine)

}
draw()

// // create runner
// var runner = Runner.create();


// Runner.run(runner, engine);

