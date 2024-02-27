const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());

const arr = input[0].split(" ").map(Number);

const answer = [];

arr.forEach((el) => {
  const P = Math.floor((el * 100) / N);

  if (P >= 0 && P <= 4) answer.push(1);
  else if (P > 4 && P <= 11) answer.push(2);
  else if (P > 11 && P <= 23) answer.push(3);
  else if (P > 23 && P <= 40) answer.push(4);
  else if (P > 40 && P <= 60) answer.push(5);
  else if (P > 60 && P <= 77) answer.push(6);
  else if (P > 77 && P <= 89) answer.push(7);
  else if (P > 89 && P <= 96) answer.push(8);
  else if (P > 96 && P <= 100) answer.push(9);
});

console.log(answer.join(" "));
