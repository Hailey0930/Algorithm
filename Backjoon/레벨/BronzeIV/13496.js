const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.shift();
let answer = "";

for (let i = 0; i < n; i++) {
  const [a, b, c] = input.shift().split(" ").map(Number);

  let result = 0;
  const canGo = b * c;

  for (let j = 0; j < a; j++) {
    const [x, y] = input[j].split(" ");

    if (+x <= canGo) {
      result += +y;
    }
  }

  input.splice(0, a);

  answer += `Data Set ${i + 1}:\n${result}\n\n`;
}

console.log(answer.trim());
