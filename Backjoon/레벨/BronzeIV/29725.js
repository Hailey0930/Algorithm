const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(""));

let white = 0;
let black = 0;

arr.forEach((el) => {
  for (let i = 0; i < el.length; i++) {
    const horse = el[i];

    switch (horse) {
      case "P":
        white += 1;
        break;
      case "p":
        black += 1;
        break;
      case "N":
      case "B":
        white += 3;
        break;
      case "n":
      case "b":
        black += 3;
        break;
      case "R":
        white += 5;
        break;
      case "r":
        black += 5;
        break;
      case "Q":
        white += 9;
        break;
      case "q":
        black += 9;
        break;
    }
  }
});

console.log(white - black);
