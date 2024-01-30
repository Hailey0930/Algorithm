const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, A, B] = input.split(" ").map((el) => +el);

if (A < B - N + N) console.log("Bus");
else if (A === B - N + N) console.log("Anything");
else console.log("Subway");
