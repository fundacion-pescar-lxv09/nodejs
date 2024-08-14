import bcrypt from "bcrypt"
import User from "../models/user.js"
import UserDao from "../dao/index.js"
import { auth } from "../utils/index.js"

export const homePage = (req,res) => {
    res.render("layouts/home", {})
}
export const signinForm = (req,res) => {
    res.render("layouts/signin", {
        title: "PescarTravels",
        message: "Agradecemos que nos elijas"
    })
}
export const loginForm = (req,res) => {
    res.render("layouts/login", {
        title: "PescarTravels",
        message: "Bienvenido nuevamente"
    })
}
export const getLogin = async (req,res) => {
    const { username, password } = req.body
    const saltedPassword = bcrypt.hash(password)
    const data = await User.find({ username, password: saltedPassword })
    if (data.length > 0){
        const payload = new UserDao(data[0])
        const token = auth(payload)
        res.header({
            Authorization: "Bearer "+ token
        })
    }else{ res.json({
        error: true,
        message: "revise que su usuario y contraseña sean correctos"
    })}

}
export const getSignIn = (req,res) => {
    const { username, email, password } = req.body
    const [p0, p1] = password
    if (p0 === p1){
        const saltedPassword = bcrypt.hash(p0)
        const user = new UserDao({ username, email, password: saltedPassword })
        const newUser = new User(user)
        newUser.save()
        .then(() => res.json(auth(user)))
        .catch((err) => res.json(err))
    }
    else {
        res.json({
            error: true,
            message: "revise los datos ingresados"
        })
    }
}