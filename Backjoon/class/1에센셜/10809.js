const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const answer = [];
const arr = input.split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

alphabet.map((el) => {
  if (arr.includes(el)) answer.push(arr.indexOf(el));
  else answer.push(-1);
});

console.log(...answer);
