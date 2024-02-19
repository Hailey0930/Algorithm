const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [A, B] = input.map((el) => +el.trim());

let answer = 3;

A -= 2;
B -= 1;

C = Math.min(A, B);

answer += C * 2;

console.log(answer);
