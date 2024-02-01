const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

if (620 <= number && number <= 780) {
  console.log("Red");
} else if (590 <= number && number < 620) {
  console.log("Orange");
} else if (570 <= number && number < 590) {
  console.log("Yellow");
} else if (495 <= number && number < 570) {
  console.log("Green");
} else if (450 <= number && number < 495) {
  console.log("Blue");
} else if (425 <= number && number <= 450) {
  console.log("Indigo");
} else if (380 <= number && number < 425) {
  console.log("Violet");
}
