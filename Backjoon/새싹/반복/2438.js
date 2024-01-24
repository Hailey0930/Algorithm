const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const number = parseInt(input);

for (let i = 1; i <= number; i++) {
  console.log("*".repeat(i));
}

// let result = "";

// for (let i = 0; i < number; i++) {
//   for (let j = 0; j <= i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);
