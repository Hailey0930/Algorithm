const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [money, chicken] = input;
const [a, b] = money.split(" ").map((el) => +el.trim());

if (BigInt(parseInt(chicken) * 2) <= BigInt(a + b))
  console.log(BigInt(a + b - parseInt(chicken) * 2).toString());
else console.log(BigInt(a + b).toString());
