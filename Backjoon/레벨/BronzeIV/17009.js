const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const aa = parseInt(input[0]);
const ab = parseInt(input[1]);
const ac = parseInt(input[2]);

const ba = parseInt(input[3]);
const bb = parseInt(input[4]);
const bc = parseInt(input[5]);

const apple = aa * 3 + ab * 2 + ac;
const banana = ba * 3 + bb * 2 + bc;

if (apple > banana) console.log("A");
else if (apple < banana) console.log("B");
else console.log("T");
