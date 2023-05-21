function drawLine(ctx, vectOne, vectTwo) {
    ctx.beginPath()
    ctx.moveTo(vectOne.x, vectOne.y)
    ctx.lineTo(vectTwo.x, vectTwo.y)
    ctx.stroke()
    ctx.closePath()
}