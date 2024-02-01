const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

input.forEach((el) => {
  BigInt(el) % BigInt(42) == BigInt(0)
    ? console.log("PREMIADO")
    : console.log("TENTE NOVAMENTE");
});
