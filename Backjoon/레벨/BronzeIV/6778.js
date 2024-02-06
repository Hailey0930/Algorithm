const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map((el) => +el);

if (A >= 3 && B <= 4) console.log("TroyMartian");
if (A <= 6 && B >= 2) console.log("VladSaturnian");
if (A <= 2 && B <= 3) console.log("GraemeMercurian");
else console.log("");
