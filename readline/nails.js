const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number;
let coords = [];
const lines = [];
rl.on("line", function (line) {
  line = line.split(" ");
  for (let i = 0; i < line.length; i++) {
    line[i] = Number(line[i]);
  }

  lines.push(line);

  if (lines.length === 2) {
    number = Number(lines[0]);
    coords = lines[1];

    console.log(number + " numbr");
    console.log(coords + " coords");
    console.log(typeof(coords) + " t coords");

    rl.on("close", () => console.log(lines));
    rl.close();
  }
});
