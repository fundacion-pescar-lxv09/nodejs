// Importacion de Modulos
import express from "express";
// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`
// Datos simulados
const appData = {
    title: "pescar express", 
    message: "bienvenido a la pagina principal",
    links: [ 
        { text: "inicio", link: "/" },  
        { text: "perfil", link: "/user/1" },  
        { text: "publicaciones", link: "/posts" } 
    ]
}
const user = {
    name: "cristian",
    email: "cristiandracedo@hotmail.com",
    address: {
        street: "calle falsa",
        number: 123,
        zipcode: "ABC-321",
        city: "Springfield"
    }
}
const posts = [
    {
        title: "publicacion x", 
        description:  "nuevo producto",
        price: "$ 999.9999"
    },
    {
        title: "publicacion y", 
        description:  "nuevo producto",
        price: "$ 2999.99"
    },
    {
        title: "publicacion z", 
        description: "nuevo producto",
        price: "$ 5999.00"
    }
]
// Config Motor de Plantillas
app.set("view engine", "pug");
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