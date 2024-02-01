const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [Max, Mel] = input;
const [t1, e1, f1] = Max.split(" ").map((el) => +el);
const [t2, e2, f2] = Mel.split(" ").map((el) => +el);

const MaxSum = t1 * 3 + e1 * 20 + f1 * 60 * 2;
const MelSum = t2 * 3 + e2 * 20 + f2 * 60 * 2;

if (MaxSum > MelSum) console.log("Max");
else if (MaxSum < MelSum) console.log("Mel");
else console.log("Draw");
