const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let number = 1;
input.map((el) => {
  number *= +el.trim();
});

const result = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

number
  .toString()
  .split("")
  .map((el) => {
    result[el] += 1;
  });

for (char in result) {
  console.log(parseInt(result[char]));
}
