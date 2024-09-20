export class PaymentData {
constructor(user){
    this.type = user.type
    this.id = user.id
    this.code = user.code
    this.name = user.name
    this.validFrom = user.validFrom
    this.validTo = user.validTo
}}