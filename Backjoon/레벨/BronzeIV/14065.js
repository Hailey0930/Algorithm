const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", function (line) {
  n = Number(line);
}).on("close", function () {
  const hundredK = 100000;
  const mile = 1609.344;
  const gallon = 3.785411784;

  const result = ((hundredK / (mile * n)) * gallon).toFixed(6);
  console.log(result);

  process.exit();
});
