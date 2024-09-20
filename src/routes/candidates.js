import * as c from "../controllers/candidates.js"
import { Router } from "express"

const candidates = Router()

candidates.post("/", c.createCandidate)
candidates.get("/:id?", c.getCandidates)
candidates.put("/:id", c.updateCandidate)
candidates.delete("/:id", c.deleteCandidate)

export default candidates