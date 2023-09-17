function compareNumbers(a, b) {
  return a - b;
}

const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number;
let coords = [];
const lines = [];
let dist = 0;
rl.on("line", function (line) {
  line = line.split(" ").map(Number);
  lines.push(line);

  if (lines.length === 2) {
    number = lines[0];
    coords = lines[1].sort(compareNumbers);

    // console.log(`number: ${number}`);
    // console.log(`coords: ${coords}`);
    // console.log(`Тип опорных элементов: ${typeof(coords[0])}`);
    // console.log(`Тип опорных элементов: ${typeof(number[0])}`);

    // if (number[0] === 2) {
    //   dist = coords[1] - coords[0];
    // } else {
    //   Math.min()
    // }



    // ! --------------------------------
    if (number[0] == 2) {
      dist = coords[1] - coords[0];
    } else if (number[0] == 3) {
      dist = coords[1] - coords[0] + (coords[2] - coords[1]);
    } else {
      for (let i = 2; i < coords.length - 2; i++) {
        if (coords[i] - coords[i - 1] < coords[i + 1] - coords[i]) {
          dist += coords[i] - coords[i - 1];
        } else {
          dist += coords[i + 1] - coords[i];
        }
      }
      dist += coords[1] - coords[0];
      dist += coords[coords.length - 1] - coords[coords.length - 2];
    }
    // ! -----------------------------------

    rl.on("close", () => console.log(dist));
    rl.close();
  }
});
