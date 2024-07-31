// Importacion de Modulos
import express from "express";
import { appData, user, posts } from "./mockupData.js"
// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`

// Config Motor de Plantillas
app.set("view engine", "ejs");

// Procesamiento de Rutas
app.get("/", (req, res) => {
    res.render("index", appData)
})
app.get("/user/:id", (req, res) =>{
    res.render("index", { ...appData, user })
})
app.get("/posts", (req, res) => {
    res.render("index", { ...appData, posts })
})    
// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))