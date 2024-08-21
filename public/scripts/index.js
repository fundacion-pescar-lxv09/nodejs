(() => document.addEventListener("DOMContentLoaded", () => {
/* Declaraciones */
    let drawing = false;
    let shape = 'freehand';
    let X1 = Y1 = X2 = Y2 = 0;
    // Lienzo
    const canvas = document.getElementById('drawingBoard');
    const ctx = canvas.getContext('2d');
    const socket = io();
    //  Controles
    const colorPiker = document.getElementById('colorPicker');
    const lineWidth = document.getElementById('lineWidth');
    const shapeSelect = document.getElementById('shape');
    const clearButton = document.getElementById('clear');
    const saveButton = document.getElementById('save');
    /* Funciones */
    const box = (prop) => canvas.getBoundingClientRect()[prop]
    const cath = (n1,n2) => Math.pow(n2-n1,2)
    // Acciones con el Lienzo
    const resizeCanvas = () => {
        canvas.width = innerWidth - 20;
        canvas.height = innerHeight - box("top") - 20;
    }
    // Acciones de Dibujo
    const startDraw = (e) => {
        drawing = true;
        X1 = e.clientX - box("left")
        Y1 = e.clientY - box("top")
        console.log(X1, Y1, X2, Y2)
    }
    const draw = (e) => {
        if (!drawing) return
        X2 = e.clientX - box("left");
        Y2 = e.clientY - box("top");
        if(shape === "freehand") {
            freehand(X2, Y2)
            socket.emit('draw', {shape,lineWidth,strokeStyle,X1,X2,Y1,Y2})
        }
    }
    const stopDraw = (e) => {
        const { lineWidth, strokeStyle } = ctx;
        drawing = false;
        X2 = e.clientX - box("left");
        Y2 = e.clientY - box("top");
        if (shape === "line") shapeData = line(X1,Y1,X2,Y2)
        if (shape === "rect") shapeData = rect(X1,Y1,X2,Y2)
        if (shape === "circle") shapeData = circle(X1,Y1,X2,Y2)
        socket.emit('draw', {shape, lineWidth, strokeStyle, X1,Y1,X2,Y2})
    }
    // Creacion de Formas
    const freehand = (x,y) => {
        ctx.lineTo(x,y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x,y)
    }
    const line = (x1,y1,x2,y2) => {
        ctx.beginPath()
        ctx.moveTo(x1,y1)
        ctx.lineTo(x2,y2)
        ctx.stroke()
        ctx.closePath()
    }
    const rect = (x1,x2,width,height) => {
        ctx.beginPath()
        ctx.strokeRect(x1,x2,width,height)
        ctx.closePath()
    }
    const circle = (x1,y1,x2,y2) => {
        const radius = Math.sqrt(cath(x1,x2) + cath(y1,y2));
        ctx.beginPath()
        ctx.arc(x1,y1, radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
    }
    // Acciones de Dibujo
    const clear = () => ctx.clearRect(0,0, canvas.width, canvas.height);
/* Eventos */
    // Seleccion de Propiedades
    colorPiker.addEventListener('input', ({target:{value}}) => 
        ctx.strokeStyle = value)
    lineWidth.addEventListener('input', ({target:{value}}) => 
        ctx.lineWidth = value)
    shapeSelect.addEventListener('input', ({target:{value}}) => 
        shape = value)
    clearButton.addEventListener('click', clear)
    // Dibujo sobre el Lienzo
    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDraw)
    // Redimension de Lienzo
    window.addEventListener('load', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)
}))()