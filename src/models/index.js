import User from "./user.js";
import Post from "./post.js";
import Destination from "./destination.js";

const models = {
    profile: User,
    users: User,
    posts: Post,
    category: Post,
    city: Destination,
    country: Destination,
    destinations: Destination,
}

export default models;