import User from "../models/user"
import { PaymentData } from "../dao"
import { resolve } from "../utils"

export const getPaymentData = (req, res) => {
    resolve(res, User.aggregate(
        { _id: req.params.id },
        {$project: {
            type: 1,
            id: 1,
            code: 1,
            name: 1,
            validFrom: 1,
            validTo: 1
        }},
        {$order: { type: 1 }}
    ))
}
export const addPaymentData = ({params: {id}, body}, res) => {
    const paymentData = new PaymentData(body)
    resolve(res, User.updateOne(
        {_id: id },
        {$push: { paymentData }}
    ))
}
export const updatePaymentData = ({params, body, query}, res) => {
    const paymentData = new PaymentData(body)
    const filteredPaymentData = Object.keys(paymentData).map(k => paymentData[k] != undefined && paymentData[k])
    resolve(res, User.updateOne(
        {
            _id: params.id, 
            "payment.id": query.id,
            "payment.code": query.code
        },
        { $set: filteredPaymentData }
    ))
}
export const deletePaymentData = ({params}, res) => {
    const paymentData = new PaymentData(req.body)
    resolve(res, User.updateOne(
        {_id: params.id },
        {$pull: { paymentData }}
    ))
}