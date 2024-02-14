const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("");

let result = {
  M: 0,
  O: 0,
  B: 0,
  I: 0,
  S: 0,
};

arr.forEach((el) => {
  result[el]++;
});

const findNoHave = Object.keys(result).find((el) => result[el] === 0);

if (findNoHave) console.log("NO");
else console.log("YES");
