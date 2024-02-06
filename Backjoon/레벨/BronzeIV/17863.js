const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = input.split("").splice(0, 3).join("");

number === "555" ? console.log("YES") : console.log("NO");
