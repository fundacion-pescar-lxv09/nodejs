export const auth = async(req, res) => {
    const payload = {
        ...req.body, 
        password: await bcrypt.hash(req.body.password)
    };
    const secret = process.env.SECRET ?? "miSecret2024Token!#$"
    const token = await jwt.sign(payload, secret, { expiresIn: "1h" })
    res.json(!token ? {message: "ha ocurrido un error"}:{token})
    next()
}
export const verify = (req, res) => {
    const data = req.header("Authorization").split(" ")[1]
    const secret = process.env.SECRET ?? "miSecret2024Token!#$";
    const decoded = jwt.verify(data, secret)

    User.find(decoded)
    .then(results=> res.json(results.length > 0 ? 
        { message: "acceso condedido" } : { message: "usuario no identificado" }))
    .catch(err => res.json(err))
    next()
}