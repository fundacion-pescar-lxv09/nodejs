import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
// Variables de Entorno
const PORT = process.env.PORT ?? 3000;
// Configuracion
const app = express();
const server = createServer(app);
const ws = new Server(server);
// Rutas estaticas
app.use(express.static('public'));
// Conexion WebSocket
ws.on("connection", (socket) => {
    console.log("cliente conectado", socket.id);
    // Eventos Cliente/Servidor
    // Servidor recibe un Mensaje de un Nodo
    socket.on("message", (data) => {
        console.log("mensaje recibido", data);
        // Servidor envia un Mensaje a los demas Nodos
        ws.emit("message", data);
    });
    // Manejo de desconexión
    socket.on("disconnect", () => {
        console.log("cliente desconectado");
    });
});
// Ejecucion de la Aplicacion
server.listen(PORT, () => {
    console.log(`servidor ejecutandose`);
});