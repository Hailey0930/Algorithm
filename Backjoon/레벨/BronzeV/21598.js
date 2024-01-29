const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

if (parseInt(input) === 1) {
  console.log("SciComLove");
} else console.log("SciComLove\nSciComLove");
