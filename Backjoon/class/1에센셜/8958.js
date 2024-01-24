const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;

for (let i = 1; i < input.length; i++) {
  let score = 0;

  const quiz = input[i].trim().split("");
  quiz.map((el) => {
    if (el === "O") {
      score += 1;
      answer += score;
    } else {
      score = 0;
    }
  });

  console.log(answer);
  answer = 0;
}
