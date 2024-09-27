let currentValue = '';
let operator = null;
let previousValue = null;

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  operator = null;
  previousValue = null;
  updateDisplay();
}

function calculate() {
  let result = null;
  const current = parseFloat(currentValue);
  const prev = parseFloat(previousValue);
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentValue = result;
  operator = null;
  previousValue = null;
  updateDisplay();
}