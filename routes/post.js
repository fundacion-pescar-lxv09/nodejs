import * as p from "../controllers/post.js"
import { Router } from "express"

const post = Router()

post.post("/", p.createPost)
post.get("/:id?", p.getPosts)
post.put("/:id", p.updatePost)
post.delete("/:id", p.deletePost)

post.get("/username/:id", p.getPosts)

export default post