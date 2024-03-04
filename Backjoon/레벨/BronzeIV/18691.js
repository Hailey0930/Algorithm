const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [G, C, E] = el.map(Number);

  let require = 0;
  if (G === 1) {
    require = E - C;
  } else if (G === 2) {
    require = (E - C) * 3;
  } else {
    require = (E - C) * 5;
  }

  require <= 0 ? console.log(0) : console.log(require);
});
