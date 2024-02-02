const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [minguk, mansae] = input;
const [aComputer, aMath, aScience, aEnglish] = minguk
  .split(" ")
  .map((el) => +el.trim());
const [bComputer, bMath, bScience, bEnglish] = mansae
  .split(" ")
  .map((el) => +el.trim());

const mingukSum = aComputer + aMath + aScience + aEnglish;
const mansaeSum = bComputer + bMath + bScience + bEnglish;

if (mingukSum > mansaeSum) console.log(mingukSum);
else if (mingukSum < mansaeSum) console.log(mansaeSum);
else console.log(mingukSum);
