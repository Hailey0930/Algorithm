const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("/");

const [K, D, A] = input.map((el) => +el);

if (K + A < D || D === 0) console.log("hasu");
else console.log("gosu");
