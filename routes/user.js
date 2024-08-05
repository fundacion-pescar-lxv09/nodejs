import * as u from "../controllers/user.js"
import { Router } from "express"

const usr = Router()
usr.post("/", u.createUser)
usr.get("/", u.getUsers)
usr.get("/:id", u.getUsers)

export default usr