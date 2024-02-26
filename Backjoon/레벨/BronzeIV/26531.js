const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

parseInt(input[0]) + parseInt(input[2]) === parseInt(input[4])
  ? console.log("YES")
  : console.log("NO");
