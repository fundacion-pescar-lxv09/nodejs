import mongoose from "mongoose";

const userSchema = {
    username: { 
        type: String,
        minLength: 4,
        maxLength: 20,
        isRequired: true
    },
    email: {
        type:String,
        minLength: 8,
        isRequired: true
    },
    password: {
        type:String,
        minLength: 4,
        isRequired: true
    },
    userData: {
        firstName: String,
        lastName: String,
        address: {Object},
        phone: String,
    },
    paymentData: [{
        type: String,
        id: String,
        code: String,
        name: String,
        validFrom: Date,
        validTo: Date
    }],
    packageHistory: [Object],
    adquiredPackages: [Object]
}
const user = mongoose.model("users", userSchema)