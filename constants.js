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

const modes = ['ball', 'box']

const THICCNESS = 10000;
const scale = 0.6
const myParticles = []


var mode = '2'
var blending = false
var intensity = 0.04
var iter = 200

const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Detector = Matter.Detector,
    Composite = Matter.Composite;
