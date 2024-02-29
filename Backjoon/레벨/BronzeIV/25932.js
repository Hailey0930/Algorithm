const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < n; i++) {
  let result = "";

  arr[i].forEach((el) => {
    if (+el === 18) result += "mack";
    else if (+el === 17) result += "zack";
  });

  console.log(arr[i].join(" "));
  if (result === "") console.log("none\n");
  else if (result.length > 4) console.log("both\n");
  else console.log(result + "\n");
}
