// Importacion de Modulos
import path  from "path";
import express from "express";
import { engine } from "express-handlebars";
import { appData, user, posts} from "./mockupData.js";
// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`

// Config Motor de Plantillas
const view = process.cwd()+"/views/";
const config = {
    defaultLayout: view+"index",
    extname: "hbs"
}
app.engine("hbs", engine(config))
app.set("view engine", "hbs");

// Procesamiento de Rutas
app.get("/", (req, res) => {
    res.render("layouts/home", appData)
})
app.get("/user/:id", (req, res) =>{
    res.render("layouts/user", { ...appData, user })
})
app.get("/posts", (req, res) => {
    res.render("layouts/posts", { ...appData, posts })
})
app.get("*", (req, res) => {
    res.render("layouts/404", { ...appData })
})

// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))