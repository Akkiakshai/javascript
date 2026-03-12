const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter product rating (1-3): ", function(rating) {
  rating = Number(rating);

  switch (rating) {
    case 1:
      console.log("Poor");
      break;
    case 2:
      console.log("Average");
      break;
    case 3:
      console.log("Good");
      break;
    default:
      console.log("Invalid rating! Please enter a number between 1 and 3.");
  }

  rl.close();
});