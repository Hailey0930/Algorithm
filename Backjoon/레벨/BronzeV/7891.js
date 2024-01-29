const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.splice(1);

const result = arr.map((el) => el.trim().split(" "));

result.forEach((el) => {
  console.log(parseInt(el[0]) + parseInt(el[1]));
});
