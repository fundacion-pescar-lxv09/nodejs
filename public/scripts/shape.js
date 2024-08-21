export const freehand = (x,y, context) => {
    context.lineTo(x,y)
    context.stroke()
    context.beginPath()
    context.moveTo(x,y)
}
export const line = (x1,y1,x2,y2, context) => {
    context.beginPath()
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.stroke()
    context.closePath()
}
export const rect = (x1,x2,width,height, context) => {
    context.beginPath()
    context.strokeRect(x1,x2,width,height)
    context.closePath()
}
export const circle = (x1,y1,x2,y2, context) => {
    const radius = Math.sqrt(cath(x1,x2) + cath(y1,y2));
    context.beginPath()
    context.arc(x1,y1, radius, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
}