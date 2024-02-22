const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map(BigInt);

const plus = a + BigInt(1);

a >= b ? console.log(b.toString()) : console.log(plus.toString());
