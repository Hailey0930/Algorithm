const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input.map((el) => el.trim());

const [p1, s1] = a.split(" ").map((el) => +el);
const [s2, p2] = b.split(" ").map((el) => +el);

const per = p1 + p2;
const est = s1 + s2;

if (per > est) {
  console.log("Persepolis");
} else if (est > per) {
  console.log("Esteghlal");
} else {
  if (s1 > p2) {
    console.log("Esteghlal");
  } else if (s1 < p2) {
    console.log("Persepolis");
  } else {
    console.log("Penalty");
  }
}
