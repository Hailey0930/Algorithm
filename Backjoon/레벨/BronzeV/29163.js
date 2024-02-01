const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ");

let happy = 0;
let sad = 0;

arr.forEach((el) => {
  +el % 2 === 0 ? (happy += 1) : (sad += 1);
});

happy > sad ? console.log("Happy") : console.log("Sad");
