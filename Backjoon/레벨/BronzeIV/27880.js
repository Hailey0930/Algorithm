const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" "));

let answer = 0;
arr.forEach((el) => {
  el[0] === "Es"
    ? (answer += parseInt(el[1]) * 21)
    : (answer += parseInt(el[1]) * 17);
});

console.log(answer);
