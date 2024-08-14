import chai, { use, expect } from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"
import { 
    fakeUser,
    fakeUserArray
} from "./users.mockup.js"

use(chaiHttp)

describe("Acceso a la pagina principal", () => {
    it("Mensaje de Bienvenida", (done) => {
        chai.request(app)
        .get("/")
        .end((err, res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
    it("Registro simple de usuario", (done) => {
        chai.request(app)
        .post("/signin")
        .type("form")
        .send(fakeUser)
        .end((err, res) => { 
            expect(err).to.be.null
            expect(res).to.status(200);
            expect(res).to.be.an("object")
            done()
        })
    })
    fakeUserArray.forEach( (user,i) => {
        it("Prueba de Registro de usuario "+ i, (done) => {
            chai.request(app)
            .post("/signin")
        })
    })
})