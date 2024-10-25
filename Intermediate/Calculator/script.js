let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(selectedOperation) {
    if (currentOperand === '') return; 
    if (previousOperand !== '') {
        compute(); 
    }
    operation = selectedOperation;
    previousOperand = currentOperand; 
    currentOperand = ''; 
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
  
    if (isNaN(prev) || isNaN(curr)) return; 

    switch (operation) {
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case '*':
            computation = prev * curr;
            break;
        case '/':
            computation = prev / curr;
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = undefined; 
    previousOperand = ''; 
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = previousOperand + (operation ? " " + operation : "") + " " + currentOperand;
}
