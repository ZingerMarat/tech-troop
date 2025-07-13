const args = process.argv.slice(2);
const num1 = Number(args[0]);
const operator = args[1];
const num2 = Number(args[2]);

const operators = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,
};

if (operator in operators) {
  console.log(`Output: ${num1} ${operator} ${num2} = ${operators[operator](num1, num2)}`);
} else {
  console.log('Invalid input');
}
