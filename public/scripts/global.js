export const global = { 
    drawing: false,
    shape: 'freehand',
    X1:0, 
    X2:0, 
    Y1:0, 
    Y2:0
};
// Lienzo
export const 
    canvas = document.getElementById('drawingBoard'),
    ctx = canvas.getContext('2d'),
    bufferCanvas = document.createElement('canvas'),
    btx = bufferCanvas.getContext('2d'),
    socket = io(),
//  Controles
    colorPiker = document.getElementById('colorPicker'),
    lineWidth = document.getElementById('lineWidth'),
    shapeSelect = document.getElementById('shape'),
    clearButton = document.getElementById('clear'),
    saveButton = document.getElementById('save')
;