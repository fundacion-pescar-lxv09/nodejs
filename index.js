// Importacion de Modulos
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars"

import dbConn from "./src/config/db.js";
import auth from "./src/routes/auth.js";
import dest from "./src/routes/destination.js";
import post from "./src/routes/post.js";
import usr from "./src/routes/user.js";
// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`
// Dependencias de Desarrollo
app.use(morgan('dev'))
// Decodificacion de parametros URL y BODY
app.use(express.urlencoded({extended: false}))
// Conexion Base de Datos
dbConn()
// Motor de Plantillas
const view = process.cwd()+"/views/";
const config = {
    partialsDir: view+"partials",
    layoutsDir: view+"layouts",
    defaultLayout: view+"index",
    extname: "hbs"
}
app.engine("hbs", engine(config))
app.set("view engine", "hbs")
// Procesamiento de Rutas
app.use("/", auth);
app.use("/destinations", dest);
app.use("/users", usr);
app.use("/posts", post)

app.get("*", express.static("./public"))
// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))
export default app;