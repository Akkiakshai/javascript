// Simple Calculator using switch case with user input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
  rl.question("Enter operator (+, -, *, /): ", function(op) {
    rl.question("Enter second number: ", function(num2) {

      num1 = Number(num1);
      num2 = Number(num2);

      switch (op) {
        case "+":
          console.log("Result:", num1 + num2);
          break;
        case "-":
          console.log("Result:", num1 - num2);
          break;
        case "*":
          console.log("Result:", num1 * num2);
          break;
        case "/":
          console.log("Result:", num1 / num2);
          break;
        default:
          console.log("Invalid operator");
      }

      rl.close();
    });
  });
});