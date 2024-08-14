import bcrypt from "bcrypt"
import User from "../models/user.js"
import { UserDao } from "../dao/index.js"
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
    const saltedPassword = bcrypt.hash(password, 10)
    const data = await User.find({ username, password: saltedPassword })
    if (data.length > 0){
        const payload = new UserDao(data[0])
        const token = auth(payload)
        res.header({
            Authorization: "Bearer "+ token
        })
        res.render("layouts/home", {message: "Bienvenido al sitio "+payload[0].username})
    }else{ res.json({
        error: true,
        message: "revise que su usuario y contraseña sean correctos"
    })}

}
export const getSignIn = async(req,res) => {
    const { username, email, password } = req.body
    const [p0, p1] = password
    if (p0 === p1){
        const hash = await bcrypt.hash(p0, 10)
        const user = new UserDao({ username, email, password: hash })
        const newUser = new User(user)
        newUser.save()
        .then(() => res.render("layouts/signin", {
            message: "los datos fueron cargados con exito"
        }))
        .catch((err) => res.json(err))
    }
    else {
        res.render("layouts/signin", {
            error: true,
            message: "revise los datos ingresados"
        })
    }
}