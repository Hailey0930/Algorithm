const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < parseInt(input[0]); i++) {
  console.log("*".repeat(parseInt(input[1])));
}
