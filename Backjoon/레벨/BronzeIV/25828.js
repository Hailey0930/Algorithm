const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [g, p, t] = input.map(Number);

const group = g + p * t;
const personal = g * p;

if (personal < group) console.log(1);
else if (group < personal) console.log(2);
else console.log(0);
