
function handleForm() {
    const formData = Object.fromEntries([...new FormData(SettingForm).entries()])

    if (formData.colorMode) {
        blending = true
        intensity = formData.intensity
    }

    if (parseInt(formData.count) > 0 || parseInt(formData.count) < 700 || parseInt(formData.count)) {
        iter = parseInt(formData.count)
        console.log(iter)
    }



    if (formData.mode) {
        mode = (formData.mode)
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