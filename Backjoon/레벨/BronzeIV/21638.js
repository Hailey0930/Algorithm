const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input.map((el) => el.trim());
const [t1, v1] = a.split(" ").map((el) => +el);
const [t2, v2] = b.split(" ").map((el) => +el);

if (t2 < 0 && v2 >= 10)
  console.log(
    "A storm warning for tomorrow! Be careful and stay home if possible!"
  );
else if (t2 < t1)
  console.log("MCHS warns! Low temperature is expected tomorrow.");
else if (v2 > v1) console.log("MCHS warns! Strong wind is expected tomorrow.");
else console.log("No message");
