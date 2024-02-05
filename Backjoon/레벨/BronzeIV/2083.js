const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  if (parseInt(el[1]) > 17 || parseInt(el[2]) >= 80)
    console.log(el[0], "Senior");
  else console.log(el[0], "Junior");
});
