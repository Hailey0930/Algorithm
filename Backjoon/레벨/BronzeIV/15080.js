const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [start, end] = input.map((el) => el.trim());

const [as, , bs, , cs] = start.split(" ").map((el) => +el);
const [ae, , be, , ce] = end.split(" ").map((el) => +el);

const startTime = as * 3600 + bs * 60 + cs;
const endTime = ae * 3600 + be * 60 + ce;

startTime > endTime
  ? console.log(endTime - startTime + 3600 * 24)
  : console.log(endTime - startTime);
