// Traffic Signals using switch case with user input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter traffic light color (Red, Yellow, Green): ", function(color) {
  color = color.toLowerCase();

  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Get Ready / Slow Down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
  }

  rl.close();
});