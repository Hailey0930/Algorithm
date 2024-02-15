const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [we, he, ws, hs] = input.map((el) => +el.trim());

we - ws >= 2 && he - hs >= 2 ? console.log(1) : console.log(0);
