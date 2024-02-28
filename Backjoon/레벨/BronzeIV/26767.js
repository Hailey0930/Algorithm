const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = "";

for (let i = 1; i <= parseInt(input); i++) {
  if (i % 7 === 0 && i % 11 !== 0) answer += "Hurra!\n";
  else if (i % 7 !== 0 && i % 11 === 0) answer += "Super!\n";
  else if (i % 7 === 0 && i % 11 === 0) answer += "Wiwat!\n";
  else answer += i + "\n";
}

console.log(answer);
