import User from "../models/user.js";

export const createUser = async(req, res) => {
    const newUser = await User(req.body)
    newUser.save()
    .then(()=> res.json({
        title: "Pescar Express",
        message: "Usuario creado",
        data: newUser
    }))
    .catch(err=>res.json(err))
}

export const getUsers = (req, res) => {
    const query = req.params.id ? {_id: req.params.id} : {}
    User.find(query)
    .then (results => res.json(results))
    .catch(err => res.json(err))
}