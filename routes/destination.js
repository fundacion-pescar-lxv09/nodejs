import * as d from "../controllers/destination.js";
import { Router } from "express";
// Creacion del Enrutador
const dest = Router();
// Rutas de la aplicacion
dest.get("/", d.getDest)
dest.get("/:id", d.getDest)
dest.post("/", d.createDest)
dest.put("/:id", d.updateDest)
dest.delete("/:id", d.deleteDest)
// Filtros
dest.get("/country/:countryId", d.getDest)
dest.put("/:id/pension/", d.updateDest)
dest.delete("/:id/pension/:pensionId", d.deleteDest)

// Exportacion del Enrutador
export default dest;