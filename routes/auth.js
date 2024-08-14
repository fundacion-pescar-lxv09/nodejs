import * as a from "../controllers/auth.js"
import { Router } from "express"

const auth = Router();

auth.get("/", a.homePage) // Pagina Principal

auth.get("/login", a.loginForm) // Formulario de Acceso
auth.post("/login", a.getLogin) // Devolver un TOKEN

auth.get("/signin", a.signinForm) // Formulario de Acceso
auth.post("/signin", a.getSignIn) // Devolver un TOKEN

export default auth