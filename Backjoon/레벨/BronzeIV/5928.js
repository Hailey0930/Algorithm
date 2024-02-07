const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map((el) => +el);

const time = arr[0] * 24 * 60 + arr[1] * 60 + arr[2];
const start = 11 * 24 * 60 + 11 * 60 + 11;

time - start < 0 ? console.log(-1) : console.log(time - start);
