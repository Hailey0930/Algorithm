const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

if (input.length > 3) {
  console.log(
    parseInt(`${input[0]}${input[1]}`) + parseInt(`${input[2]}${input[3]}`)
  );
} else {
  if (input[1] === "0") {
    console.log(parseInt(`${input[0]}${input[1]}`) + parseInt(input[2]));
  } else if (input[2] === "0") {
    console.log(parseInt(input[0]) + parseInt(`${input[1]}${input[2]}`));
  } else {
    console.log(parseInt(input[0]) + parseInt(input[1]));
  }
}
