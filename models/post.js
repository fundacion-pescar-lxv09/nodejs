import mongoose from "mongoose";

const postSchema = {
    title: String,
    description: String
}
const Post = mongoose.model("Posts", postSchema)

export default Post 