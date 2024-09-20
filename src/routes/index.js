import * as c from "../controllers/index.js";
import { Router } from "express";
const r = Router()
["/users", "/posts", "/destinations"].forEach(path => {
    r.get(path, c.readDocs)
    r.post(path, c.createDoc)
    r.put(path+"/:id", c.updateDoc),
    r.delete(path+"/:id", c.deleteDoc)
})
export default r;