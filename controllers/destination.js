import Destination from "../models/destination.js";
// Definicion de Metodos
export const createDest = async (req, res) => {
    const newDest = await Destination(req.body)
    newDest.save()
    .then(() => res.json({
        title: "Pescar Express",
        message: "Los datos fueron creados exitosamente",
        data: newDest
    }))
    .catch((err)=>console.log(err))
}
export const getDest = (req, res) => {
    const { countryId, id } = req.params
    const query = (
        countryId ? 
        {"location.country": countryId } : 
        id ?
        {_id: id} : 
        {}
    )
    Destination.find(query)
    .then(results => res.json(results))
    .catch(err => console.log(err))
}
export const updateDest = (req, res) => {
    Destination.updateOne(req.params, req.body)
    .then(()=>res.json({
        title: "Pescar Express",
        message: "El destino fue actualizado exitosamente"
    }))
    .catch(err => console.log(err))
}
export const deleteDest = (req, res) => {
    Destination.deleteOne(req.params)
    .then(()=>res.json({
        title: "Pescar Express",
        message: "El destino acaba de ser eliminado"
    }))
    .catch(err => console.log(err))
}