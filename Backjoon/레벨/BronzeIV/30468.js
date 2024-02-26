const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [STR, DEX, INT, LUK, N] = input.map((el) => +el.trim());

const average = (STR + DEX + INT + LUK) / 4;

if (average >= N) console.log(0);
else {
  console.log(Math.ceil((N - average) * 4));
}
