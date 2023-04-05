const utils = require("../js/utils.js");

describe("Utils", () => {
    test("Hauria de calcular la suma de forma correcte", () => {
        expect(utils.calculate(2, 3, '+')).toEqual(5);
    });
    test("Hauria de calcular la resta de forma correcte", () => {
        expect(utils.calculate(3, 2, '-')).toEqual(1);
    });
    test("Hauria de calcular la multiplicació de forma correcte", () => {
        expect(utils.calculate(2, 3, '*')).toEqual(6);
    });
    test("Hauria de calcular la divisió de forma correcte", () => {
        expect(utils.calculate(6, 2, '/')).toEqual(3);
    });
});