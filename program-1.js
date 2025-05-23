class Calculator {
  constructor(num1, num2, operator) {
    this.num1 = parseFloat(num1);
    this.num2 = parseFloat(num2);
    this.operator = operator.trim().toLowerCase();
  }

  compute() {
    if (isNaN(this.num1) || isNaN(this.num2)) {
      return 'Error: Invalid numeric input.';
    }

    switch (this.operator) {
      case 'add':
        return this.num1 + this.num2;
      case 'subtract':
        return this.num1 - this.num2;
      case 'multiply':
        return this.num1 * this.num2;
      case 'divide':
        return this.num2 !== 0 ? (this.num1 / this.num2) : 'Error: Division by zero';
      default:
        return 'Error: Operation not recognized.';
    }
  }
}

const input1 = prompt("Please enter the first number:");
const input2 = prompt("Please enter the second number:");
const operator = prompt("Choose an operation: add, subtract, multiply, or divide.");

const userCalculator = new Calculator(input1, input2, operator);
const output = userCalculator.compute();

alert(`The result is: ${output}`);
