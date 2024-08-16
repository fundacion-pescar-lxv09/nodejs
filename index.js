// Dependencias
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
// Variables de Entorno
const { PORT } = process.env
// Configuracion Servidor
const app = express()
const server = createServer(app);
const ws = new Server(server);
// Rutas estaticas
app.use(express.static('public'));
// Conexion del Cliente
ws.on("connection", (socket) => {
    console.log(`cliente ${socket.id} conectado`);
    // Eventos Websocket
    socket.on("shareLocation", (data) => ws.emit("updateLocation", data))
// Desconexion del Cliente
    socket.on("disconnect", ()=> {
        console.log(`cliente ${socket.id} desconectado`);
    })
})
server.listen(PORT ?? 3000, () => console.log(`ejecutando servicio`))