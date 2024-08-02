import destinations from "../models/destination.js";
// Definicion de Metodos
export const createDest = (req, res) => {
    destinations.save(req.body)
    .then(() => res.json({
        title: "Pescar Express",
        message: "Los datos fueron creados exitosamente",
        data: req.body
    }))
    .catch((err)=>console.log(err))
}
export const getDest = (req, res) => {
    ( req.params.id ? 
        destinations.find(req.params) : 
        destinations.find())
    .then(results => res.json(results))
    .catch(err => console.log(err))
}
export const updateDest = (req, res) => {
    destinations.updateOne(req.params, req.body)
    .then(()=>res.json({
        title: "Pescar Express",
        message: "El destino fue actualizado exitosamente"
    }))
    .catch(err => console.log(err))
}
export const deleteDest = (req, res) => {
    destinations.deleteOne(req.params)
    .then(()=>res.json({
        title: "Pescar Express",
        message: "El destino acaba de ser eliminado"
    }))
    .catch(err => console.log(err))
}