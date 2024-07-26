const http = require("http");
const { readFile, read } = require("fs");
const path = require("path");

const fn = (file, res) => readFile(file, (err,data) => res.end(data))

const app = http.createServer((req,res) => {
    const src = "./public/"
    const {dir, name } = path.parse(req.url)
    console.log(name);
    switch(dir.toLowerCase()){
        case "/":
        switch (name.toLowerCase()){
            case "gallery":
            case "contact":
                return fn(src+name+".html",res)
            default: 
                fn(src+"index.html", res)
        }   
        break;
        case "/styles": 
            return fn(src+'default.css', res)
        case "/scripts": 
            return fn(src+"index.js", res)
        default: 
            res.end("Error 404 Pagina No Encontrada")
    }
})

app.listen(3000, "localhost", console.log("ok"))