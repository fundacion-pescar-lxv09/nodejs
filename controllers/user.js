import User from "../models/user.js";
import bcrypt from "bcrypt"

export const createUser = async(req, res) => {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password[0], 10)
    const newUser = await User({...req.body, password: hashedPassword})
    newUser.save()
    .then(()=> res.json({
        title: "Pescar Express",
        message: "Usuario creado",
        data: newUser
    }))
    .catch(err=>res.json(err))
}
export const getUsers = ({params:{id:_id, key, value}}, res) => {
    const query = _id ? {_id} : key && value ? {[key]:value} : {}
    User.find(query)
    .then (results => res.json(results))
    .catch(err => res.json(err))
}
export const updateUser = ({params:{id}, body}, res) => {
    User.updateOne({$or:{_id: ObjectId(id), username: id}},{$set: body})
    .then(data => res.json({
        title: "Pescar Express",
        message: "datos actualizados exitosamente",
        data
    }))
    .catch(err => res.json(err))
}
export const deleteUser = ({params:{id:_id}}, res) => {
    User.deleteOne({_id})
    .then(data => res.json({
        title: "Pescar Express",
        message: "Usuarios eliminado exitosamente",
        data
    }))
    .catch(err => res.json(err))
}