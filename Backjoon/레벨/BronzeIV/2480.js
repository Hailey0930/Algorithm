const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b, c] = input.split(" ").map((el) => +el);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (
  (a === b && b !== c && a !== c) ||
  (b === c && b !== a && a !== c) ||
  (a === c && a !== b && b !== c)
) {
  if (a === b) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + b * 100);
  } else if (a === c) {
    console.log(1000 + c * 100);
  }
} else {
  console.log(Math.max(a, b, c) * 100);
}

// let [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((x,y)=> x-y);

// if(a==b && b==c){
//   console.log(10000 + a*1000)
// } else if(a==b || b==c){
//   console.log(1000 + b*100)
// } else {
//   console.log(c*100)
// }
