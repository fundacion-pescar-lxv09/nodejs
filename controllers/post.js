import Post from "../models/post.js"
import { resolve } from "../utils/resolve.js"

export const createPost = (req, res) => {
    const newPost = new Post(req.body)
    resolve(res, newPost.save())
}
export const getPosts = async(req, res) => {
    resolve(res, Post.find())
}
export const updatePost = (req, res) => {
    resolve(res, Post.updateOne(
        {_id: req.params.id}, // criterio de busqueda
        {$set: req.body} // valores de actualizacion
))}
export const deletePost = (req, res) => {
    resolve(res, Post.deleteOne({_id: req.params.id}))
}