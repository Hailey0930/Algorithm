const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const arr = input.map((el) => el.trim().toLowerCase().split(""));

arr.forEach((el) => {
  let count = 0;

  el.forEach((item) => {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    )
      count += 1;
  });
  console.log(count);
});
