const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [HH, MM] = input.split(" ").map((el) => +el);

const hour = HH - 9;
const minute = MM;

console.log(hour * 60 + minute);
