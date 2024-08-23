import { global, canvas, ctx, socket } from "./global.js"
import { freehand, line, rect, circle } from "./shape.js";
import { getCurrentCoords, getStartCoords } from "./utils.js";
// Acciones de Dibujo
export const startDraw = (e) => {
    getStartCoords(e)
    global.drawing = true;
}
export const draw = (e) => {
    if (!global.drawing) return
    getCurrentCoords(e)
    const { lineWidth, strokeStyle } = ctx;
    const {shape, X2, Y2 } = global;
    if(shape === "freehand") {
        freehand(X2, Y2, ctx)
        socket.emit('draw', {...global, lineWidth, strokeStyle})
    }
}
export const stopDraw = (e) => {
    const { lineWidth, strokeStyle } = ctx;
    getCurrentCoords(e);
    global.drawing = false;
    const {shape,X1,X2,Y1,Y2} = global
    if (shape === "line") line(X1,Y1,X2,Y2, ctx)
    if (shape === "rect") rect(X1,Y1,X2,Y2, ctx)
    if (shape === "circle") circle(X1,Y1,X2,Y2, ctx)
    socket.emit('draw', {...global, lineWidth, strokeStyle})
}
export const clear = (context) => context.clearRect(0,0, canvas.width, canvas.height);