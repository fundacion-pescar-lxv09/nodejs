import Candidate from "../models/candidate.js"
import { resolve } from "../utils/index.js"
export const createCandidate = ({body}, res) => 
    resolve(res, new Candidate(body).save())
export const getCandidates = ({id}, res) => 
    resolve(res, Candidate.find(id?{_id:id}:{}))
export const updateCandidate = ({body, params:{id:_id}}, res) => 
    resolve(res, Candidate.updateOne({_id}, {$set: body}))
export const deleteCandidate = ({params: {id:_id}}, res) =>
    resolve(res, Candidate.deleteOne({_id}))