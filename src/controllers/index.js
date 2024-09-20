import models from "../models/index.js"
import { resolve, setQuery } from "../utils/index.js"

export const createDoc = ({url, body},res) => {
    const Model = setModel(url)
    resolve(res, Model(body))
}
export const readDocs = (req, res) => {
    const Model = setModel(url)
    resolve(res, Model.find(setQuery(req)))
}
export const updateDoc = ({params:{id:_id},body}, res) =>{
    const Model = setModel(url)
    resolve(res, Model.updateOne({_id}, {$set: body}))
}
export const deleteDoc = ({params:{id:_id}}, res) =>{
    const Model = setModel(url)
    resolve(res, Model.deleteOne({_id}))
}
const check = (url,text) => {
    url.includes(text)
}
export const setModel = (url) =>
    Object.keys(models).forEach(k => {
        if (check(url, k)) return models[k]
    })