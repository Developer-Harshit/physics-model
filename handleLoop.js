const startBtn = document.querySelector('#start-btn')
const stopBtn = document.querySelector('#stop-btn')
const resetBtn = document.querySelector('#reset-btn')


const configBtn = document.querySelector('#config-btn')
const modeSelector = document.querySelector('#form-div form select')

function startSim() {
    state = 1

}
function stopSim() {
    state = 0


}
function resetSim(event) {
    event.preventDefault()
    Composite.clear(engine.world)
    Engine.clear(engine)

    if (modeSelector.value) {
        mode = (modeSelector.value)
        console.log(mode)
    }
    createParticle(mode)

    createBorders()
    mouse = new Mouse()
    mouse.removeListener()




}
startBtn.addEventListener('click', startSim)
stopBtn.addEventListener('click', stopSim)
resetBtn.addEventListener('click', resetSim)

configBtn.addEventListener('click', resetSim)