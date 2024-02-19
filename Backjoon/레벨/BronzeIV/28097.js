const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...arr] = input;

const result = [...arr][0].split(" ").map((el) => +el.trim());

let time = 0;
for (let i = 0; i < parseInt(N); i++) {
  time += result[i];
}

time += (parseInt(N) - 1) * 8;

console.log(Math.floor(time / 24), time % 24);
