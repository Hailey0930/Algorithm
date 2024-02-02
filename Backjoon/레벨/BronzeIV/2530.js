const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [start, cook] = input;

let [H, M, S] = start.split(" ").map((el) => +el);

S += parseInt(cook);

M += Math.floor(S / 60);
S %= 60;

H += Math.floor(M / 60);
M %= 60;

H %= 24;

console.log(H, M, S);
