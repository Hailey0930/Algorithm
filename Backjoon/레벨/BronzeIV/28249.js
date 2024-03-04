const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const arr = input.map((el) => el.trim());

let count = 0;

arr.forEach((el) => {
  switch (el) {
    case "Poblano":
      count += 1500;
      break;
    case "Mirasol":
      count += 6000;
      break;
    case "Serrano":
      count += 15500;
      break;
    case "Cayenne":
      count += 40000;
      break;
    case "Thai":
      count += 75000;
      break;
    case "Habanero":
      count += 125000;
      break;
  }
});

console.log(count);
