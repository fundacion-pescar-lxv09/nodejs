import {expect} from "chai" // esm
import division from "../index.js"
/* TDD (Test Driven Development)
    - orientada en la identificacion de pruebas
    - se inicia con las pruebas antes que el codigo
    - el resultado inicial siempre el falso
    - sistema Green Red Refactor
    - Pruebas unitarias
*/
const div = division
describe("verificacion de funcion division", ()=> {
    // Pruebas Unitarias
    it("la operacion 10/5 debe dar 2", () => {
        expect(div(10,5)).to.be.equal(2)
    });
    it("no se puede dividir entre 0", () => {
        expect(div(10,0)).to.be.an("object")
    });
    it("utilizar un string devuelve error", () => {
        expect(div(Number("10"),Number("a"))).to.have.property("message")
    })
});
// BDD (Behavior Driven Development)
