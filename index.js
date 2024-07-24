// Importacion de Modulos
const p = require('./module.process.js');
const { deviceInfo } = require('./module.os.js');
const { getURLInfo } = require('./module.path.js');
// Declaraciones
const {argv} = process;
const [url1, url2, url3] = p.getArgs(argv)
// Procesos
p.printArgs(argv);
console.log(
    deviceInfo(),
    getURLInfo(url1),
    getURLInfo(url2),
    getURLInfo(url3)
);