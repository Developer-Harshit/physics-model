

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
    assignSetting()
    createParticle(mode)


    createBorders()
    mouse = new Mouse()
    mouse.removeListener()






}

startBtn.addEventListener('click', startSim)
stopBtn.addEventListener('click', stopSim)
resetBtn.addEventListener('click', resetSim)

configBtn.addEventListener('click', configSim)