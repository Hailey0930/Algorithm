const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [c, p] = el.map(Number);

  const beforeDiscount = c * p;
  const discount = 2 * (c - 1);

  const total = beforeDiscount - discount;

  console.log(c, p);
  console.log(total);
});
