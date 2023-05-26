const digit = document.querySelectorAll(".calc")
const operator = document.querySelectorAll(".operator")


operandSelected = false
let firstNumber
let operand
let secondNumber
let array = []

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        if (!operandSelected) {
            firstNumber = parseInt(digit.textContent)
            array.push(firstNumber)
        } else {
            secondNumber = parseInt(digit.textContent)
            array.push(secondNumber)
            operate(operand, array)
        }
    })
})

operator.forEach((operator) => {
    operator.addEventListener('click', function () {
        operandSelected = true
        operand = operator.textContent
    })
})


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
