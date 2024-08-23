import { bufferCanvas, canvas, global } from "./global.js";
export const box = (prop) => canvas.getBoundingClientRect()[prop]
export const cath = (n1,n2) => Math.pow(n2-n1,2)
export const resizeCanvas = () => {
[canvas, bufferCanvas].forEach((c) =>{
    c.width = innerWidth - 20;
    c.height = innerHeight - box("top") - 20;
})}
const getCoords = ({clientX:x, clientY:y},n) => {
    const xn = "X"+n, yn="Y"+n
    global[xn] = x - box("left");
    global[yn] = y - box("top");
}
export const getStartCoords = (e) => getCoords(e,1)
export const getCurrentCoords = (e) => getCoords(e,2)