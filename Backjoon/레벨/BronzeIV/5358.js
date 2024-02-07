const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((el) => {
  const arr = el.trim().split("");

  arr.forEach((item, index) => {
    if (item === "i") arr[index] = "e";
    else if (item === "e") arr[index] = "i";
    else if (item === "I") arr[index] = "E";
    else if (item === "E") arr[index] = "I";
  });

  console.log(arr.join(""));
});
