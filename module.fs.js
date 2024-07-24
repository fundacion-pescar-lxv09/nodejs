const fs = require("fs")
const output = "./docs/output.txt";
const callback = (err,action) =>{
    if (err) console.warn(err)
    console.log("accion " + action + " finalizada");
}
// Lectura
console.log("inicia la lectura")
fs.readFile('./docs/filesystem.md', (err, data) => {
    if (err) console.warn(err);
    console.log("archivo leido con exito");
    console.log(data);
})
console.log("termina la lectura")

// Escritura
console.log("inicia la escritura")
fs.writeFile(output, "Soy un archivo", (err) => callback(err,"escribir"))
console.log("termina la escritura")

// Anidacion
console.log("inicia la anidacion de contenido")
fs.appendFile(output, "mas info", (err) => callback(err,"agregar"))
console.log("termina la anidacion de contenido")

// Renombrar
console.log("inicia el renombramiento")
fs.rename(output, './docs/output.md', (err) => callback(err,"renombrar"))
console.log("termina el renombramiento")