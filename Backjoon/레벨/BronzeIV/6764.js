const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => +el.trim());

let answer = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[0] < arr[1] && arr[1] < arr[2] && arr[2] < arr[3])
    answer = "Fish Rising";
  else if (arr[0] > arr[1] && arr[1] > arr[2] && arr[2] > arr[3])
    answer = "Fish Diving";
  else if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3])
    answer = "Fish At Constant Depth";
  else answer = "No Fish";
}

console.log(answer);
