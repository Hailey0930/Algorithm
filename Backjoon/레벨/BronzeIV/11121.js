const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  el[0] === el[1] ? console.log("OK") : console.log("ERROR");
});
