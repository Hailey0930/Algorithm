const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const letter = "WelcomeToSMUPC";
const number = parseInt(input) % 14;

console.log(letter[(number + 13) % 14]);
