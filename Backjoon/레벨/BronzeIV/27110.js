const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...arr] = input;

const result = arr.join("").split(" ");

let answer = 0;

result.forEach((el) => {
  +el <= parseInt(N) ? (answer += +el) : (answer += parseInt(N));
});

console.log(answer);
