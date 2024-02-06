const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [birth, count] = input.map((el) => el.trim());

const [by, bm, bd] = birth.split(" ").map((el) => +el);
const [cy, cm, cd] = count.split(" ").map((el) => +el);

let sum = 0;

if (bm < cm) sum = cy - by;
else if (bm === cm && bd <= cd) sum = cy - by;
else sum = cy - by - 1;

console.log(sum);
console.log(cy - by + 1);
console.log(cy - by);
