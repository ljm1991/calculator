const digit = document.querySelectorAll(".calc")
const operator = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
const display = document.querySelector("p")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const op = document.querySelector("#op")

operandSelected = false
let firstNumber
let operand
let secondNumber
let array = []

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        if (!operandSelected) {
            num1.textContent += (digit.textContent)
            firstNumber = parseFloat(num1.textContent)
            console.log(firstNumber)
        } else {
            num2.textContent += (digit.textContent)
            secondNumber = parseFloat(num2.textContent)
        }
    })
})

operator.forEach((operator) => {
    operator.addEventListener('click', function () {
        operandSelected = true
        operand = operator.textContent;
        op.textContent = operator.textContent
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

clear.addEventListener('click', function () {
    num1.textContent = ''
    num2.textContent = ''
    op.textContent = ''
    array = []
    operandSelected = false
})

equal.addEventListener('click', function () {
    if (!firstNumber == "") {
        array.push(firstNumber)
        array.push(secondNumber)
        operate(operand, array)
        array = [];
        num1.textContent = `${firstNumber}`
        num2.textContent = ''
        op.textContent = ''
    }
})