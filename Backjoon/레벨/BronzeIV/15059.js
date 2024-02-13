const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [food, client] = input;
const [ca, ba, pa] = food.split(" ").map((el) => +el.trim());
const [cr, br, pr] = client.split(" ").map((el) => +el.trim());

let answer = 0;

if (cr > ca) {
  answer += cr - ca;
}
if (br > ba) {
  answer += br - ba;
}
if (pr > pa) {
  answer += pr - pa;
}

console.log(answer);
