const http = require("http");
// Variables de entorno
const HOST = process.env.HOST ?? "127.0.0.1"; // localhost
const PORT = process.env.PORT ?? 3000;
// Creacion del servidor
http.createServer( (req,res) => {
    // Respuesta para el cliente
    res.writeHead(200,{ "Content-Type" : "text/plain" }) // Cabecera
    res.end("conexion exitosa"); // Finalizacion de conexion
}) // Puerto abierto para comunicaciones
.listen(
    PORT, // un numero entre 1024 y 49151 (Que no este ocupado)
    HOST, // direccion ip del equipo o 127.x.x.x (x = 0-255)
    console.log("aplicacion funcionando en puerto "+PORT) // consola del servidor
) 