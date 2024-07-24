// Importacion de Modulos
const p = require('./module.process.js');
const { deviceInfo } = require('./module.os.js');
// Declaraciones
const {argv} = process;

// Procesos
p.printArgs(argv);
console.log(deviceInfo());