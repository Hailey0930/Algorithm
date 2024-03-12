const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [P, C] = input.map((el) => +el.trim());

const get = P * 50;
const lost = C * 10;
const bonus = P > C ? 500 : 0;

console.log(get - lost + bonus);
