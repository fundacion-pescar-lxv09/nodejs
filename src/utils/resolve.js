export const resolve = (res, callback) => {
    callback.then((data)=> res.json({
        title: "Pescar Express",
        message: `operacion realizada con exito`,
        data
    }))
    .catch(err => res.json(err))
    console.log(callback, res)
}