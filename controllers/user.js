import User from "../models/user.js";
import bcrypt from "bcrypt"

export const createUser = async(req, res) => {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password[0], 10)
    const newUser = await User({...req.body, password: hashedPassword})
    resolve(res, newUser.save())
}
export const getUsers = ({params:{id:_id, key, value}}, res) => {
    const query = _id ? {_id} : key && value ? {[key]:value} : {}
    resolve(res, User.find(query))
}
export const updateUser = ({url, params:{id}, body}, res) => {
    resolve(res, User.updateOne({$or:{_id: ObjectId(id), username: id}},{$set: filterFields(body)}))
}
export const deleteUser = ({params:{id:_id}}, res) => {
    resolve(res, User.deleteOne({_id}))
}