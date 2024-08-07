import mongoose from "mongoose";

const postSchema = {
    title: String,
    description: String,
    username: String,
    product: {
        name: String,
        stock: Number,
        price: Number,
        description: String,
        categories: [String]
    }
}
const Post = mongoose.model("Posts", postSchema)

export default Post 