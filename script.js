const resultInput = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    resultInput.value = expression;
}

function appendOperator(operator) {
    if (expression === '' && operator !== '-') return;
    expression += ` ${operator} `;
    resultInput.value = expression;
}

function clearDisplay() {
    expression = '';
    resultInput.value = '';
}

function deleteLast() {
    expression = expression.trim().slice(0, -1).trim();
    resultInput.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression.replace(/%/g, '/100'));
        resultInput.value = result;
        expression = result.toString();
    } catch (error) {
        resultInput.value = 'Error';
        expression = '';
    }
}
