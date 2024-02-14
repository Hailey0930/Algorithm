const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [k, w, m] = input.map((el) => +el);

const need = w - k;

console.log(Math.ceil(need / m));
