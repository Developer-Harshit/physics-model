const modeSelector = document.querySelector('#form-div form #mode')
const blendingInput = document.querySelector('#form-div form #colorMode')
const intensityInput = document.querySelector('#form-div form #intensity')
const countInput = document.querySelector('#form-div form #count')

const startBtn = document.querySelector('#start-btn')
const stopBtn = document.querySelector('#stop-btn')
const resetBtn = document.querySelector('#reset-btn')


const configBtn = document.querySelector('#config-btn')


const SettingForm = document.querySelector('#form-div form')

const matterContainer = document.querySelector("#matter-container");


const modes = ['ball', 'box', 'fluid', 'chain']
const THICCNESS = 100000;
const myParticles = []
const myConstraints = []
const scale = 0.6

var blending = true
var intensity = 0.013
var iter = 100
var mode = '0'

var ground
var leftWall
var rightWall

// module aliases



const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Detector = Matter.Detector,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint;


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
var detector = Detector.create()
var state = 1

const cnv = document.querySelector('#matter-container canvas')
const c = cnv.getContext('2d')