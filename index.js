// Importacion de Modulos
import express from "express";
import morgan from "morgan";

import dbConn from "./config/db.js";
import dest from "./routes/destination.js";
import post from "./routes/post.js";
import usr from "./routes/user.js";
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
// Procesamiento de Rutas
app.use("/destinations", dest);
app.use("/users", usr);
app.use("/posts", post)

app.get("*", (req, res) => {
    res.json({
        title: "pescar express", 
        message: "bienvenido a la pagina principal",
    })
})
// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))