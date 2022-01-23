function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function skip(a,b) {
    return b;
}

function operate(numberOne, numberTwo, operation) {
    return operation(numberOne, numberTwo);
}

function populateContent(input) {
    const content = document.querySelector('.content');
    content.textContent = input;
}

function addButtonLogicNumbers() {
    const buttons = document.querySelectorAll('.number');
    buttons.forEach(button => button.addEventListener('click', pressNumber));
}

function changeCurrentDisplay(number) {
    currentDisplay = currentDisplay + number;
}

function pressNumber(event) {
    const buttonNumber = event.target;
    changeCurrentDisplay(buttonNumber.textContent);
    populateContent(currentDisplay);
}

let currentDisplay = "";
let firstNumber = 0;
let secondNumber = 0;
let operation = skip;

addButtonLogicNumbers();
