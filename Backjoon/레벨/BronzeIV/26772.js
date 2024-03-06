const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const heart = [
  " @@@   @@@  ",
  "@   @ @   @ ",
  "@    @    @ ",
  "@         @ ",
  " @       @  ",
  "  @     @   ",
  "   @   @    ",
  "    @ @     ",
  "     @      ",
];

const n = parseInt(input);

for (let i = 0; i < heart.length; i++) {
  console.log(heart[i].repeat(n));
}
