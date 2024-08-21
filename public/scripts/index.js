(() => document.addEventListener("DOMContentLoaded", () => {
/* Declaraciones */
    let drawing = false;
    let shape = 'freehand';
    let startX = startY = currentX = currentY = 0;
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
    // Acciones con el Lienzo
    const resizeCanvas = () => {
        canvas.width = innerWidth - 20;
        canvas.height = innerHeight - box("top") - 20;
    }
    // Acciones de Dibujo
    const startDraw = (e) => {
        drawing = true;
        startX = e.clientX - box("left")
        startY = e.clientY - box("top")
        console.log(startX, startY, currentX, currentY)
    }
    const draw = (e) => {
        if (!drawing) return
        currentX = e.clientX - box("left");
        currentY = e.clientY - box("top");
        if(shape === "freehand") freehand(currentX, currentY)
    }
    const stopDraw = (e) => {
        drawing = false;
        currentX = e.clientX - box("left");
        currentY = e.clientY - box("top");
        if (shape === "line") line(startX, startY, currentX, currentY)
        if (shape === "rect") rect(startX, startY, currentX, currentY)
        if (shape === "circle") circle(startX, startY, currentX, currentY)
        console.log(canvas)
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
        cat = (n1,n2) => Math.pow(n2-n1,2)
        const radius = Math.sqrt(cat(x1,x2) + cat(y1,y2));
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