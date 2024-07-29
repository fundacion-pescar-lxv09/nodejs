// Importacion de Modulos
import express from "express";
// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`
// Procesamiento de Rutas
app.get("*", (req, res) => {
    res.render({
        title: "pescar express", 
        message: "bienvenido a la pagina principal",
    })
})
// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))