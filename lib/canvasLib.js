function drawLine(ctx, vectOne, vectTwo, size = 5) {
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = size;
  ctx.beginPath();
  ctx.moveTo(vectOne.x, vectOne.y);
  ctx.lineTo(vectTwo.x, vectTwo.y);
  ctx.stroke();
  ctx.closePath();
}
