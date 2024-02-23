const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim());

arr.forEach((el) => {
  switch (el) {
    case "CU":
      console.log("see you");
      break;
    case ":-)":
      console.log("I’m happy");
      break;
    case ":-(":
      console.log("I’m unhappy");
      break;
    case ";-)":
      console.log("wink");
      break;
    case ":-P":
      console.log("stick out my tongue");
      break;
    case "(~.~)":
      console.log("sleepy");
      break;
    case "TA":
      console.log("totally awesome");
      break;
    case "CCC":
      console.log("Canadian Computing Competition");
      break;
    case "CUZ":
      console.log("because");
      break;
    case "TY":
      console.log("thank-you");
      break;
    case "YW":
      console.log("you’re welcome");
      break;
    case "TTYL":
      console.log("talk to you later");
      break;
    default:
      console.log(el);
      break;
  }
});
