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

function addButtonLogicOperators() {
    const buttons = document.querySelectorAll('.operator');
    buttons.forEach(button => button.addEventListener('click', pressOperator));
}

function addButtonLogicEqual() {
    const button = document.querySelector('.equal');
    button.addEventListener('click', pressEqual);
}

function addButtonLogicClear() {
    const button = document.querySelector('#clear');
    button.addEventListener('click',reset);
}

function addButtonLogicBackspace() {
    const button = document.querySelector('#back');
    button.addEventListener('click',backSpace);
}

function addButtonLogicDot() {
    const button = document.querySelector('.dot');
    button.addEventListener('click', addDot);
}

function backSpace(event){
    if (currentDisplay.length > 0) {
        currentDisplay = currentDisplay.slice(0,-1);
        populateContent(currentDisplay);
    }
}

function reset(event){
    notOperated = true;
    currentDisplay = "";
    firstNumber = 0;
    secondNumber = 0;
    operation = skip;
    populateContent(currentDisplay);
}


function containsNoDot(inputString) {
    return !(inputString.includes('.'));
}

function addDot(){
    const content = document.querySelector('.content');
    const value = content.textContent;
    if (containsNoDot(value)) {
        changeCurrentDisplay('.');
        populateContent(currentDisplay);
    }
}


function getOperator(operatorSymbol) {
    let nextOperation;
    switch (operatorSymbol) {
        case "+":
            nextOperation = add;
            break;
        case "-":
            nextOperation = subtract;
            break;
        case "*":
            nextOperation = multiply;
            break;
        case "/":
            nextOperation = divide;
            break;
    }
    return nextOperation;
}

function applyOperation(){
    secondNumber = Number(currentDisplay);
    console.log(`NumberTwo: ${secondNumber}`);
    let result = operate(firstNumber, secondNumber, operation);
    console.log(result);
    currentDisplay = "";
    if (notOperated) {
        populateContent("");
    }
    else {
        populateContent(result);
    }
    notOperated = false;
    firstNumber = result;
}

function applyEqual(){
    secondNumber = Number(currentDisplay);
    console.log(`NumberTwo: ${secondNumber}`);
    let result = operate(firstNumber, secondNumber, operation);
    console.log(result);
    currentDisplay = result.toString();
    if (notOperated) {
        populateContent("");
    }
    else {
        populateContent(result);
    }
    notOperated = false;
    firstNumber = result;
}

function pressEqual(event) {
    console.log(`NumberOne: ${firstNumber}`);
    console.log(`Operation: ${operation}`);
    const buttonEqual = event.target;
    applyEqual();
    console.log(`After Operation: NumberOne: ${firstNumber}`);
    console.log(`After Operation: NumberOne: ${secondNumber}`);
    operation = skip;
    notOperated = true; 
}

function pressOperator(event) {
    const buttonOperator = event.target;
    console.log(`NumberOne: ${firstNumber}`);
    applyOperation();
    console.log(`Operation: ${operation}`);
    const operator = getOperator(buttonOperator.textContent);
    console.log(`After Operation: NumberOne: ${firstNumber}`);
    console.log(`After Operation: NumberOne: ${secondNumber}`);
    operation = operator;
}

let notOperated = true;
let currentDisplay = "";
let firstNumber = 0;
let secondNumber = 0;
let operation = skip;

addButtonLogicNumbers();
addButtonLogicOperators();
addButtonLogicEqual();
addButtonLogicBackspace();
addButtonLogicClear();
addButtonLogicDot();