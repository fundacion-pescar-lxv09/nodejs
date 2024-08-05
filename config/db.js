import mongoose from "mongoose";
import dotenv from "dotenv";
// Acceso a .env
dotenv.config()
const { URI, DB } = process.env
// Conexion con servidor MongoDB
const dbConn = () => 
    mongoose.connect(URI ?? "mongodb://localhost:27017/pescarTravels")
    .then(() => console.log(`conectado con DB ${DB}`))
    .catch((e) => console.log(`Error: ${e}`))
// Exportacion de Conexion
export default dbConn;