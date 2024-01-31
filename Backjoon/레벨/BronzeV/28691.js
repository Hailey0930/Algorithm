const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

switch (input) {
  case "M":
    console.log("MatKor");
    break;
  case "W":
    console.log("WiCys");
    break;
  case "C":
    console.log("CyKor");
    break;
  case "A":
    console.log("AlKor");
    break;
  default:
    console.log("$clear");
    break;
}
