export const auth = async(payload) => {
    const secret = process.env.SECRET ?? "miSecret2024Token!#$"
    const token = await jwt.sign(payload, secret, { expiresIn: "1h" })
    return (!token ? {
        error: true, 
        message: "ha ocurrido un error"
    }:
    {token})
}
export const verify = async (req, res, next) => {
    const data = req.header("Authorization").split(" ")[1]
    const secret = process.env.SECRET ?? "miSecret2024Token!#$";
    const decoded = jwt.verify(data, secret)
    const results = await User.find(decoded)
    if (!results.length > 0) res.json({
        title: "Pescar Express",
        message: "Acceso no concedido"
    })
    next()
}