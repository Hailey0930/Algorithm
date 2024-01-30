const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [visit, home] = input.map((el) => el.trim());

const visitArr = visit.split(" ");
const homeArr = home.split(" ");

const [vT, vF, vS, vP, vC] = visitArr.map((el) => +el);
const [hT, hF, hS, hP, hC] = homeArr.map((el) => +el);

console.log(
  vT * 6 + vF * 3 + vS * 2 + vP + vC * 2,
  hT * 6 + hF * 3 + hS * 2 + hP + hC * 2
);
