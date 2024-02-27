const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [t1, m1, t2, m2] = input.map(Number);

let time = (t2 - t1) * 60 + (m2 - m1);

if (time < 0) time += 24 * 60;

console.log(time, Math.floor(time / 30));
