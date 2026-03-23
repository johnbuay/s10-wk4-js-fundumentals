// CALCULATOR

function addNumbers(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

function modulus(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return addNumbers(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiplyNumbers(num1, num2);
    case "/":
      return divideNumbers(num1, num2);
    case "%":
      return modulus(num1, num2);
    case "**":
      return power(num1, num2);
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 4));


