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
    socket.on('draw', (data) => {
        // new Shape(data).save()
        console.log("figura creada ", { user: socket.id, data})
        socket.emit("draw", data)
    })
    socket.on('clear', () => {
        // Shape.deleteMany({ user: socket.id })
    })
// Desconexion del Cliente
    socket.on("disconnect", ()=> {
        console.log(`cliente ${socket.id} desconectado`);
    })
})
server.listen(PORT ?? 3000, () => console.log(`ejecutando servicio`))