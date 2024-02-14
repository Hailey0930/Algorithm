const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, P] = input.map((el) => +el.trim());

const discount = [0];

if (N >= 20) discount.push(P * 0.25);
if (N >= 15) discount.push(2000);
if (N >= 10) discount.push(P * 0.1);
if (N >= 5) discount.push(500);

const price = P - Math.max(...discount);

price < 0 ? console.log(0) : console.log(price);
