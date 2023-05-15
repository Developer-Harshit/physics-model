const startBtn = document.querySelector('#start-btn')
const stopBtn = document.querySelector('#stop-btn')
const resetBtn = document.querySelector('#reset-btn')


const configBtn = document.querySelector('#config-btn')
const modeSelector = document.querySelector('#form-div form select')
const SettingForm = document.querySelector('#form-div form')
function startSim() {
    state = 1

}
function stopSim() {
    state = 0


}
function resetSim(event) {
    event.preventDefault()
    const formData = Object.fromEntries([...new FormData(SettingForm).entries()])
    if (formData.colorMode) {
        blending = true
        intensity = formData.intensity
    }
    console.log(formData)

    Composite.clear(engine.world)
    Engine.clear(engine)

    if (formData.mode) {
        mode = (formData.mode)
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