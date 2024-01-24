const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const data = input[i].split(" ").map((el) => +el);

  if (data[0] + data[1] > 0) {
    console.log(data[0] + data[1]);
  }
}
