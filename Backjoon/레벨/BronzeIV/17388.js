const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [S, K, H] = input.map((el) => +el);

if (S + K + H >= 100) console.log("OK");
else {
  const min = Math.min(S, K, H);

  if (min === S) {
    console.log("Soongsil");
  } else if (min === K) {
    console.log("Korea");
  } else {
    console.log("Hanyang");
  }
}

// const [S, K, H] = input.map((el) => +el);

// if(S + K + H >= 100){
//     console.log("OK");
// }else {
//     const min = Math.min(S, K, H);
//     switch(min){
//         case S: console.log('Soongsil'); break;
//         case K: console.log('Korea'); break;
//         case H: console.log('Hanyang'); break;
//     }
// }
