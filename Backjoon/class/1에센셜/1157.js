const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = {};
const arr = input.toUpperCase().split("");

arr.map((el) => {
  if (!result[el]) {
    result[el] = 1;
  } else result[el] += 1;
});

let count = 0;
let answer = "";

for (char in result) {
  if (result[char] > count) {
    count = result[char];
    answer = char;
  } else if (result[char] === count) {
    answer = "?";
  }
}

console.log(answer);
