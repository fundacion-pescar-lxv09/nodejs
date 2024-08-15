import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

// Variables de Entorno
const PORT = process.env.PORT ?? 3000
// Configuracion
const app = express()
const server = createServer(app)
const ws = new Server(server)
// Rutas estaticas
app.use(express.static('public'))
// Conexion WebSocket
ws.on("connection", (socket) => {
    console.log("cliente conectado", socket);
// Eventos Cliente/Servidor
    // Servidor recibe un Mensaje de un Nodo
    socket.on("message", (data) => {
        console.log(data)
    // Servidor envia un Mensaje a los demas Nodos
        ws.emit("message", data)
    })
})
// Desconexion WebSocket
ws.on("disconnect", () => {
    console.log("cliente desconectado");
})
// Ejecucion de la Aplicacion
app.listen(PORT, console.log("servidor ejecutandose"))