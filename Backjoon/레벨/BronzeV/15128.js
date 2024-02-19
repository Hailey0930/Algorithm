const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [p1, q1, p2, q2] = input.map((el) => +el);

(p1 * p2) % (q1 * q2 * 2) !== 0 ? console.log(0) : console.log(1);
