const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map((el) => +el);

console.log(M === N ? 1 : 0);
