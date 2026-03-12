const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(num) {
  num = Number(num);

  if (num > 0) {
    console.log("The number is Positive");
  } else if (num < 0) {
    console.log("The number is Negative");
  } else {
    console.log("The number is Zero");
  }

  rl.close();
});