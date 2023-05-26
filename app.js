


let operand
let secondNumber
let firstNumber





const operate = function (operand, array) {
    if (operand === '+') {
        return firstNumber = add(array)
    } else if (operand === '-') {
        return firstNumber = subtract(array)
    } else if (operand === 'x') {
        return firstNumber = multiply(array)
    } else if (operand === '/') {
        return firstNumber = divide(array)
    }
}

const add = function (array) {
    const total = array.reduce((total, number) => total + number)
    return total
}

const subtract = function (array) {
    const total = array.reduce((total, number) => total - number)
    return total
}


const multiply = function (array) {
    const total = array.reduce((total, number) => total * number)
    return total
};


const divide = function (array) {
    const total = array.reduce((total, number) => total / number)
    return total
}
