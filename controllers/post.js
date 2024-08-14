import Post from "../models/post.js"
import { resolve, setQuery } from "../utils/index.js"
export const createPost = ({body}, res) => 
    resolve(res, new Post(body).save())
export const getPosts = async(req, res) => 
    resolve(res, Post.find())
export const updatePost = ({body, params:{id:_id}}, res) => 
    resolve(res, Post.updateOne({_id}, {$set: body}))
export const deletePost = ({params: {id:_id}}, res) =>
    resolve(res, Post.deleteOne({_id}))