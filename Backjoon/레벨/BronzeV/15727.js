const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

if (parseInt(input) % 5 === 0) console.log(parseInt(input) / 5);
else console.log(Math.floor(parseInt(input) / 5) + 1);
