const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, plan, study] = input.map((el) => el.trim());

const planArr = plan.split(" ").map((el) => +el);
const studyArr = study.split(" ").map((el) => +el);

let answer = 0;
studyArr.forEach((el, index) => {
  if (el >= planArr[index]) answer++;
});

console.log(answer);
