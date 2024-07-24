const fs = require("node:fs")
const output = "./docs/output.md";
const data = `# Creacion Sincronica de Archivos

los datos fueron cargados en forma de string, pero cuando utilizamos el modulo filesystem se procesan como Buffer(), es decir valores hexadecimales separados en grupos de 2 digitos (00 - FF)[0 - 255 decimal]`

const newData = `
Podemos escribir y editar cualquier tipo de archivo, siempre y cuando tengamos permiso para hacerlo. En caso de ser necesario podemos indicar los tipos de permisos sobre el archivo a manipular

* r: solo lectura
* r+: lectoescritura 
* w: escritura
* wx: escritura y ejecucion
* x: ejecucion
`
// Lectura de datos (BUFFER)
console.log("inicia la lectura del archivo");
const file = fs.readFileSync("./docs/filesystem.md");
console.log("finaliza la lectura del archivo");

// Creacion de archivos (SOBREESCRITURA)
console.log("inicia la escritura de un archivo");
fs.writeFileSync(output, data);
console.log("finaliza la escritura del archivo");

// Agregar contenido al final de un Archivo
console.log("inicia la anidacion de contenido")
fs.appendFileSync(output, newData);
console.log("finaliza la anidacion de contenido")

// Renombrar el archivo (SOBREESCRITURA)
console.log("inicia la accion de renombrar");
fs.renameSync(output, "./docs/fsData.md");
console.log("finaliza la accion de renombrar");

console.log(`
se accedio al contenido 
|---------------------CONTENIDO---------------------|
${file}
|---------------------CONTENIDO---------------------|
se escribio un nuevo archivo
se manipulo y se renombro
`)