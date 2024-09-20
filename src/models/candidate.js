import mongoose from "mongoose";
import { location } from "./location.js";
import { uid, Employee as name, picture } from "./employee.js"
const candidateSchema = {
    uid,
    email: String,
    gender: String,
    phone: String,
    cell: String,
    nat: String,
    area: String,
    name,
    location,
    picture,
    
}
const Candidate = mongoose.model("candidates", candidateSchema)
export default Candidate 