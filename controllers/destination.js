import Destination from "../models/destination.js";
import { resolve, setQuery } from "../utils/index.js";
export const createDest = async ({body}, res) => 
    resolve(res, await Destination(body))
export const getDest = (req, res) => 
    resolve(res, Destination.find(setQuery(req)))
export const updateDest = ({body, params:{id: _id}}, res) =>
    resolve(res, Destination.updateOne({_id},{$set:body}))
export const deleteDest = ({params:{id:_id}}, res) =>
    resolve(res, Destination.updateOne({_id}))
export const getIfExists = ({params:{id}}, res) =>
    resolve(res, Destination.find({[id]:{$exists: true}}))