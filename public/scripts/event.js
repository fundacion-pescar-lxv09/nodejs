import { startDraw, draw, stopDraw, clear } from "./canvas.js"
import { global, ctx, canvas, colorPiker, lineWidth, shapeSelect, clearButton } from "./global.js"
import { resizeCanvas } from "./utils.js"
export const Events = () =>{
    colorPiker.addEventListener('input', ({target:{value}}) => ctx.strokeStyle = value)
    lineWidth.addEventListener('input', ({target:{value}}) => ctx.lineWidth = value)
    shapeSelect.addEventListener('input', ({target:{value}}) => global.shape = value)
    clearButton.addEventListener('click', () => clear(ctx))
    // Dibujo sobre el Lienzo
    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDraw)
    // Redimension de Lienzo
    window.addEventListener('load', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)
}