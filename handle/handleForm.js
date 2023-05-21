
function handleForm() {

    if (blendingInput.checked) {
        blending = true
        intensity = intensityInput.value
    } else {
        blending = false
    }

    if (parseInt(countInput.value) >= countInput.min &&
        parseInt(countInput.value) <= countInput.max &&
        parseInt(countInput.value)) {
        iter = parseInt(countInput.value)

    }

    if (modeSelector.value) {
        mode = (modeSelector.value)
    }


}

function assignSetting() {
    modeSelector.value = mode
    intensityInput.value = intensity
    countInput.value = iter
    blendingInput.checked = blending

}
function configSim(event) {
    event.preventDefault()
    handleForm()

    Composite.clear(engine.world)
    Engine.clear(engine)
    createParticle(mode)

    createBorders()
    mouse = new Mouse()
    mouse.removeListener()




}
configBtn.addEventListener('click', configSim)

modeSelector.addEventListener('input', function () {
    if (modeSelector.value == '3') {
        countInput.max = 10
    } else {
        countInput.max = 700
    }
})