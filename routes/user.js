import * as u from "../controllers/user.js"
import { Router } from "express"

const usr = Router()
usr.post("/", u.createUser)
usr.get("/", u.getUsers)
usr.get("/:id", u.getUsers)
usr.put("/:id", u.updateUser)
usr.delete("/:id", u.deleteUser)

usr.get("/:key/:value", u.getUsers)

export default usr