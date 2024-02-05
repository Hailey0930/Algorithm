const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B, C] = input.split(" ").map((el) => +el);

let multiplication = 0;
let division = 0;

multiplication = (A * B) / C;
division = (A / B) * C;

console.log(Math.floor(Math.max(multiplication, division)));
