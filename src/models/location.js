
const Street = {
    name: String,
    number: Number,

}
const Coord = {
    latitude: String,
    longitude: String,

}
const TimeZone  = {
    offset: String,
    description: String,

}
export const location = {
    street: Street,
    city: String,
    state: String,
    country: String,
    postcode: Number,
    Coordinates: Coord,
    timezone: TimeZone,
    
}