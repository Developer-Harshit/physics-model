function handleResize(matterContainer) {
    // set canvas size to new values
    render.canvas.width = matterContainer.clientWidth;
    render.canvas.height = matterContainer.clientHeight;

    // reposition ground
    ground.respose(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2
    )


    // reposition right wall
    rightWall.respose(
        matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2
    )

}

window.addEventListener("resize", () => handleResize(matterContainer))