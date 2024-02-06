const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, drink] = input.map((el) => el.trim());

const [A, B] = drink.split(" ").map((el) => +el);

Math.floor(A / 2) + B > N ? console.log(N) : console.log(Math.floor(A / 2) + B);
