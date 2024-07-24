const p = require('./module.process.js');
const {argv} = process;

p.getArgs(argv);
p.printArgs(argv);