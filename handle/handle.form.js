modeSelector.addEventListener("input", function (event) {
  if (event.target.value) {
    mode = event.target.value;
  }
  if (event.target.value == "3") {
    countInput.max = 50;
  } else {
    countInput.max = 500;
  }
});
intensityInput.addEventListener("input", function (event) {
  if (event.target.value) {
    intensity = event.target.value;
  }
});
blendingInput.addEventListener("input", function (event) {
  blending = event.target.checked;
});
countInput.addEventListener("input", function (event) {
  const myValue = parseInt(event.target.value);
  if (myValue >= countInput.min && myValue <= countInput.max && myValue) {
    iter = myValue;
  }
});

function configSim(event) {
  event.preventDefault();
  Composite.clear(engine.world);
  Engine.clear(engine);
  createParticle(mode);
  createBorders();
  mouse = new Mouse();
  mouse.removeListener();
}

function changeState(event) {
  state = parseInt(event.target.dataset.state);
}

startBtn.addEventListener("click", changeState);
stopBtn.addEventListener("click", changeState);
resetBtn.addEventListener("click", configSim);
configBtn.addEventListener("click", configSim);
