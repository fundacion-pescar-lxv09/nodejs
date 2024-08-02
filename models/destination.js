import mongoose from "mongoose"
const destinationSchema = {
    name: String,
    package: {
        days: Number,
        nights: Number,
        activities: [String],
        transportation: String,
        cost: Number,
        currency: String
    },
    lodging: [{
        name: String,
        address: {
            street: String,
            number: Number,
            city: String,
            zipcode: Number
        },
        pension: [{
            type: String,
            cost: Number,
            currency: String
        }]
    }],
    location: {
        city: {
            type: String,
            isRequired: true
        },
        country: {
            type: String,
            isRequired: true
        },
        region: String,
        coords: {
            latitude: Number,
            longitude: Number
        }
    },
    travelDate: [Date],
    payment: [{
        type: String,
        currency: String
    }]
};
export const destinations = mongoose.model("destination", destinationSchema)