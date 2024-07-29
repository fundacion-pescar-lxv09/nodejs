const http = require("http");
const { readFile } = require("fs");
const path = require("path");

// Importacion de Elementos
const Nav = require("./src/nav.js");
const Header = require("./src/header.js");
const { Services, Products, Home, ErrorPage } = require("./src/content.js");

const app = http.createServer((req,res) => {
    let content = "";
    let headers = {"Content-Type":"text/html; charset='utf-8'"};
    const {url, method} = req;
    res.writeHead(200,headers);
    switch(method){
    case "GET":
        res.write(Nav());
        if (url.toLowerCase().includes("product")){
            content = Header("Productos") + Products();
        }
        else if(url.toLowerCase().includes("service")){
            content = Header("Servicios") + Services();
        }
        else if(url.toLowerCase().includes("home")){
            content = Header("Inicio") + Home();
        }
        else content = ErrorPage(404, "Pagina no encontrada");
        res.end(content);
    break;
    case "POST":
        if (url.toLowerCase().includes("contact"))
        readFile("./public/contact.html", (err,data)=> res.end(data));
    break;
    case "PUT":
        readFile("./public/contact.html", (err,data) => res.end(data));
    break;
    case "DELETE":
        res.end(ErrorPage(403, "Accion no autorizada"))
    break;
    }
})

app.listen(3000, "localhost", console.log("ok"))