import * as u from "../controllers/user.js"
import * as p from "../controllers/payment.js"
import { Router } from "express"
import { auth, verify } from "../utils/auth.js"

const usr = Router()
// Rutas de Usuario
usr.post("/", u.createUser)
usr.get("/", u.getUsers)
usr.get("/:id", auth, u.getUsers)
usr.put("/:id", verify, u.updateUser)
usr.delete("/:id", verify, u.deleteUser)
// Rutas para datos de Pago
usr.get("/:id/payment", verify, p.getPaymentData)
usr.post("/:id/payment", verify, p.addPaymentData)
usr.put("/:id/payment", verify, p.updatePaymentData)
usr.delete("/:id/payment", verify, p.deletePaymentData)

usr.get("/:key/:value", u.getUsers)

export default usr