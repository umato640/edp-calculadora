let value1 = undefined;
let value2 = undefined;
let operator = undefined;

function display(val){
    document.getElementById('display_val').value = val;
}

function set(val) {
    if(operator === undefined) {
        if(value1 === undefined)
            value1 = val.toString();
        else
            value1 += val.toString();

        display(value1);
    }
    else {
        if(value2 === undefined)
            value2 = val.toString();
        else
            value2 += val.toString();

        display(value2);
    }
}

function set_op(op) {
    operator = op;
}

function set_point() {
    if(operator === undefined) {
        if(value1 === undefined)
            value1 = '0.';
        else if(value1.toString().indexOf('.') === -1)
            value1 += '.';

        display(value1);
    }
    else {
        if(value2 === undefined)
            value2 = '0.';
        else if(value2.toString().indexOf('.') === -1)
            value2 += '.';

        display(value2);
    }
}

function calculate(a, b, op) {
    if(op === '+') {
        return a + b;
    }
    if(op === '-') {
        return a - b;
    }
    if(op === '*') {
        return a * b;
    }
    if(op === '/') {
        return a / b;
    }
}

function equal() {
    // Si només hi ha valor1, retorna'l
    if(value2 === undefined && operator === undefined && value1 !== undefined) {
        display(value1);
        value2 = undefined;
        operator = undefined;
        return;
    }

    // Si no s'ha definit l'operador, retorna el segon valor
    if(value2 !== undefined && operator === undefined && value1 !== undefined) {
        display(value2);
        value1 = value2;
        value2 = undefined;
        operator = undefined;
        return;
    }

    // Si hi ha algun valor per definir, retorna error
    if(value1 === undefined || value2 === undefined || operator === undefined) {
        display('Error');
        value1 = undefined;
        value2 = undefined;
        operator = undefined;
        return;
    }

    let a = parseFloat(value1);
    let b = parseFloat(value2);

    const result = calculate(a, b, operator);
    display(result);

    value1 = result;
    value2 = undefined;
    operator = undefined;
}

function clr() {
    value1 = undefined;
    value2 = undefined;
    operator = undefined;

    display('');
}
