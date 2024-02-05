const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map((el) => +el);

if (M === 1 || M === 2) console.log("NEWBIE!");
else if (M <= N) console.log("OLDBIE!");
else console.log("TLE!");
