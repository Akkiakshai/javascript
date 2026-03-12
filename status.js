// Pass or Fail Program using if-else with user input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter student's marks: ", function(marks) {
  marks = Number(marks);

  if (marks > 33) {
    console.log("Result: Pass");
  } else {
    console.log("Result: Fail");
  }

  rl.close();
});