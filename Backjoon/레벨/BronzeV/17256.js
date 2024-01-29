const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, c] = input;

const [ax, ay, az] = a.split(" ").map((el) => +el);
const [cx, cy, cz] = c.split(" ").map((el) => +el);

const [bx, by, bz] = [cx - az, cy / ay, cz - ax];

console.log(bx, by, bz);
