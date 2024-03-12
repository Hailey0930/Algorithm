const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" ").map(Number));

arr.forEach((el) => {
  const count = el.shift();
  let isValid = true;

  for (let i = 1; i < count; i++) {
    if (el[i] / el[i - 1] < 2) {
      isValid = false;
      break;
    }
  }

  console.log(`Denominations: ${el.join(" ")}`);

  if (isValid) {
    console.log("Good coin denominations!\n");
  } else console.log("Bad coin denominations!\n");
});
