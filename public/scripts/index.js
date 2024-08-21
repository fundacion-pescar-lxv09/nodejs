(() => document.addEventListener("DOMContentLoaded", () => {
/* Declaraciones */
    let drawing = false;
    const canvas = document.getElementById('drawingBoard');
    const ctx = canvas.getContext('2d');
    const socket = io();
    //  Controles
    const colorPiker = document.getElementById('colorPicker');
    const lineWidth = document.getElementById('lineWidth');
    const shape = document.getElementById('shape');
/* Funciones */
    // Acciones con el Lienzo
    const resizeCanvas = () => {
        canvas.width = innerWidth - 20;
        canvas.height = innerHeight - canvas.getBoundingClientRect().top - 20;
    }
    const startDraw = (e) => {
        drawing = true;
        console.log("startDraw", e.clientX, e.clientY)
    }
    const draw = (e) => {
        if (!drawing) return
        console.log("draw", e.clientX, e.clientY)
    }
    const stopDraw = (e) => {
        drawing = false;
        console.log("stopDraw", e.clientX, e.clientY)
    }

/* Eventos */
    // Dibujo sobre el Lienzo
    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDraw)
    // Redimension de Lienzo
    window.addEventListener('load', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)
}))()