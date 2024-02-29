const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const n = input.shift();
// const arr = input.map((el) => el.trim().split(" "));

// for (let i = 0; i < n; i++) {
//   let answer = "";
//   const [a, b, c] = arr[i].map(Number);

//   if (a >= 10 && b >= 10 && c >= 10) {
//     i === n - 1
//       ? (answer += arr[i].join(" ") + "\n" + "triple-double")
//       : (answer += arr[i].join(" ") + "\n" + "triple-double" + "\n");
//   } else if (
//     (a >= 10 && b >= 10) ||
//     (b >= 10 && c >= 10) ||
//     (a >= 10 && c >= 10)
//   ) {
//     i === n - 1
//       ? (answer += arr[i].join(" ") + "\n" + "double-double")
//       : (answer += arr[i].join(" ") + "\n" + "double-double" + "\n");
//   } else if (a >= 10 || b >= 10 || c >= 10) {
//     i === n - 1
//       ? (answer += arr[i].join(" ") + "\n" + "double")
//       : (answer += arr[i].join(" ") + "\n" + "double" + "\n");
//   } else if (a < 10 && b < 10 && c < 10) {
//     i === n - 1
//       ? (answer += arr[i].join(" ") + "\n" + "zilch")
//       : (answer += arr[i].join(" ") + "\n" + "zilch" + "\n");
//   }

//   console.log(answer);
// }

const n = input.shift();
const arr = input.map((el) => el.trim().split(" "));
let answer = "";

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  const result = arr[i].map(Number);
  answer += result.join(" ") + "\n";

  for (let j = 0; j < result.length; j++) {
    if (result[j] >= 10) count++;
  }

  if (count === 0) answer += "zilch\n\n";
  else if (count === 1) answer += "double\n\n";
  else if (count === 2) answer += "double-double\n\n";
  else answer += "triple-double\n\n";
}

console.log(answer.trim());
