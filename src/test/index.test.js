import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';
import { 
    fakeUser,
    fakeUsersArray
} from './users.mockup.js';

chai.use(chaiHttp);

describe("Acceso a la pagina principal", () => {
    it("Mensaje de Bienvenida", (done) => {
        chai.request(app)
        .get("/")
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });

    it("Registro simple de usuario", (done) => {
        chai.request(app)
        .post("/signin")
        .send(fakeUser)
        .end((err, res) => { 
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    fakeUsersArray.forEach((user, i) => {
    it("Prueba de Registro de usuario " + i, (done) => {
        chai.request(app)
        .post("/signin")
        .type("form")
        .send(user)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    }) });
});
