const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

switch (input) {
  case "fdsajkl;":
  case "jkl;fdsa":
    console.log("in-out");
    break;

  case "asdf;lkj":
  case ";lkjasdf":
    console.log("out-in");
    break;

  case "asdfjkl;":
    console.log("stairs");
    break;

  case ";lkjfdsa":
    console.log("reverse");
    break;

  default:
    console.log("molu");
}
