const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, P] = input.map((el) => +el);

if (7 * A > 13 * P) console.log("Axel");
else if (7 * A < 13 * P) console.log("Petra");
else console.log("lika");
