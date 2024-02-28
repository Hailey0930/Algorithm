const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("");

arr.forEach((el, index) => {
  switch (el) {
    case "a":
      arr[index] = 4;
      break;
    case "e":
      arr[index] = 3;
      break;
    case "i":
      arr[index] = 1;
      break;
    case "o":
      arr[index] = 0;
      break;
    case "s":
      arr[index] = 5;
      break;
  }
});

console.log(arr.join(""));
