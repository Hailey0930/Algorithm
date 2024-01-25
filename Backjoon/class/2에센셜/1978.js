const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map((el) => +el);

const isPrime = (n) => {
  if (n === 1) return false;

  let end = Math.sqrt(n);

  for (let i = 2; i <= end; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(arr.filter((el) => isPrime(el)).length);
