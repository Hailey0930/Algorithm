const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" ")).splice(0, input.length - 1);

arr.forEach((el) => {
  if (parseInt(el[0]) > parseInt(el[1])) console.log("Yes");
  else console.log("No");
});
