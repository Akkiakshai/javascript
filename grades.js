// Student Grades Program using if-else with user input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter student's marks: ", function(marks) {
  marks = Number(marks);

  if (marks >= 80) {
    console.log("Grade: A");
  } else if (marks >= 60) {
    console.log("Grade: B");
  } else {
    console.log("Grade: C");
  }

  rl.close();
});