const digit = document.querySelectorAll(".calc")
const operator = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
const display = document.querySelector("p")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const op = document.querySelector("#op")
const decimal = document.querySelector("#decimal")
const erase = document.querySelector("#erase")
operandSelected = false
num1Selected = false
let firstNumber
let operand
let secondNumber
let array = []

clear.addEventListener('click', clearAll)

document.addEventListener('keydown', function (e) {
    if (e.key >= 0 && e.key <= 9 || e.key === ".") {
        if (!operandSelected) {
            if (!num1Selected) {
                {
                    num1.textContent += `${e.key}`
                    firstNumber = parseFloat(num1.textContent)
                }
            } else {
                clearAll()
            }
        } else {
            num2.textContent += `${e.key}`
            secondNumber = parseFloat(num2.textContent)
        }
    } else if (e.key === "Backspace") {
        clearAll()
    } else if (e.key == "x" || e.key == "/" || e.key == "+" || e.key == "-") {
        if (!num1.textContent == "") {
            getOperator(e.key)
        }
    } else if (e.key === "Enter") {
        answer()
    }
})


digit.forEach((digit) => {
    digit.addEventListener('mouseup', function () {
        if (!operandSelected) {
            if (!num1Selected) {
                num1.textContent += (digit.textContent)
                firstNumber = parseFloat(num1.textContent)
                console.log(firstNumber)
            } else {
                clearAll()
            }
        }
        else {
            num2.textContent += (digit.textContent)
            secondNumber = parseFloat(num2.textContent)
            console.log(secondNumber)
        }
    })
})


operator.forEach((operator) => {
    operator.addEventListener('mouseup', function () {
        getOperator(operator.textContent)
    })
})


function operate(operand, array) {
    console.log(operand, array)
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
    return Math.round(total * 10) / 10
}

const subtract = function (array) {
    const total = array.reduce((total, number) => total - number)
    return Math.round(total * 10) / 10
}


const multiply = function (array) {
    const total = array.reduce((total, number) => total * number)
    return Math.round(total * 10) / 10
};


const divide = function (array) {
    const total = array.reduce((total, number) => total / number)
    return Math.round(total * 10) / 10
}

equal.addEventListener('click', answer)


decimal.addEventListener('click', function () {
    decimal.disabled = true;
})

erase.addEventListener('click', function () {
    if (!operandSelected) {
        poof(num1)
    } poof(num2)
})

function poof(element) {
    let string = element.textContent.trimEnd()
    string = string.substring(0, string.length - 1)
    element.textContent = string
}

function exponents(variable, element) {
    const string = variable.toString()
    if (string.length < 9) {
        element.textContent = `${variable}`
    }
    else {
        exponent = variable.toExponential(2);
        element.textContent = `${exponent}`
    }
}


function getOperator(data) {
    if (!num1.textContent == "") {
        operandSelected = true
        operand = data
        op.textContent = data
        decimal.disabled = false
        num1Selected = true
    }
}

function clearAll() {
    num1.textContent = ''
    num2.textContent = ''
    op.textContent = ''
    array = []
    operandSelected = false
    decimal.disabled = false
    num1Selected = false
    console.log(num1Selected)
    operand = ''
}

function answer() {
    if (!firstNumber == "") {
        array.push(firstNumber)
        array.push(secondNumber)
        operate(operand, array)
        array = [];
        num2.textContent = ''
        op.textContent = ''
        decimal.disabled = false
        exponents(firstNumber, num1)
        operandSelected = !operandSelected
        operand = ''
    }
}


