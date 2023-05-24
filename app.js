const add = function (a, b) {
    return a + b
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0)
};


const multiply = function (array) {
    return array.reduce((total, number) => total * number, 1)
};


const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    let total = a;
    if (a === 0) {
        return 1;
    }
    for (let i = a - 1; i > 0; i--) {
        total *= i;
    }
    return total
};