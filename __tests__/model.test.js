import Calculadora from "../js/model.js";

describe("Unit test calculadora", () => {
    test("Hauria de crear-se la taula correctament amb els valors inicials amb el valor undefined", () => {
        let calc = new Calculadora();
        expect(calc.value1).toBe(undefined);
        expect(calc.value2).toBe(undefined);
        expect(calc.operator).toBe(undefined);
    });
    test("Assignar 1 a value1", () => {
        let calc = new Calculadora();
        calc.set(1);
        expect(calc.value1).toBe("1");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Afegir una altre valor 1 a value1", () => {
        let calc = new Calculadora();
        calc.set(1);
        calc.set(1);
        expect(calc.value1).toBe("11");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Assignar un operador", () => {
        let calc = new Calculadora();
        calc.set(1);
        calc.set(1);
        calc.operator = '+';
        expect(calc.value1).toBe("11");
        expect(calc.operator).toBe('+');
        expect(calc.value2).toBe(undefined);
    });
    test("Assignar un valor a value2", () => {
        let calc = new Calculadora();
        calc.set(1);
        calc.set(1);
        calc.operator = '+';
        calc.set(2);
        expect(calc.value1).toBe("11");
        expect(calc.operator).toBe('+');
        expect(calc.value2).toBe("2");
    });
    test("Afegir un valor a value2", () => {
        let calc = new Calculadora();
        calc.set(1);
        calc.set(1);
        calc.operator = '+';
        calc.set(2);
        calc.set(2);
        expect(calc.value1).toBe("11");
        expect(calc.operator).toBe('+');
        expect(calc.value2).toBe("22");
    });
    test("Assignar un valor decimal a value1", () => {
        let calc = new Calculadora();
        calc.set_point();
        calc.set(3);
        expect(calc.value1).toBe("0.3");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Afegir un valor decimal a value1", () => {
        let calc = new Calculadora();
        calc.set(2);
        calc.set_point();
        calc.set(3);
        expect(calc.value1).toBe("2.3");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Assignar un valor decimal a value2", () => {
        let calc = new Calculadora();
        calc.set(2);
        calc.set_point();
        calc.set(3);        
        calc.operator = '+';
        calc.set_point();
        calc.set(2);        
        expect(calc.value1).toBe("2.3");
        expect(calc.operator).toBe('+');
        expect(calc.value2).toBe("0.2");
    });
    test("Afegir un valor decimal a value2", () => {
        let calc = new Calculadora();
        calc.set(2);
        calc.set_point();
        calc.set(3);        
        calc.operator = '+';
        calc.set(3);
        calc.set_point();
        calc.set(2);        
        expect(calc.value1).toBe("2.3");
        expect(calc.operator).toBe('+');
        expect(calc.value2).toBe("3.2");
    });
    test("Operar només amb el valor1", () => {
        let calc = new Calculadora();
        calc.set(2);     
        expect(calc.operate()).toBe("2");
        expect(calc.value1).toBe("2");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Operar sense operador", () => {
        let calc = new Calculadora();
        calc.set(2);   
        calc.value2 = "3";  
        expect(calc.operate()).toBe(undefined);
        expect(calc.value1).toBe("3");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Provocar un error", () => {
        let calc = new Calculadora();
        calc.set(2);   
        calc.operator = '+';  
        expect(calc.operate()).toBe("Error");
        expect(calc.value1).toBe(undefined);
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Operar amb totes els valors requerits definits", () => {
        let calc = new Calculadora();
        calc.set(2);   
        calc.operator = '+';  
        calc.set(3);
        expect(calc.operate()).toBe(5);
        expect(calc.value1).toBe(5);
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
    test("Natejar tots els valors", () => {
        let calc = new Calculadora();
        calc.set(2);   
        calc.operator = '+';  
        calc.set(3);
        calc.clear();
        expect(calc.value1).toBe(undefined);
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
});