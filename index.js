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
const config = {
    partialsDir:  "views/partials",
    layoutsDir: "views/layouts",
    defaultLayout: "../index.hbs",
    extname: "hbs"
}
app.engine("hbs", engine(config))
app.set("view engine", "hbs");

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