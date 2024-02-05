const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < arr.length; i++) {
  const [H, M, S] = [
    parseInt(arr[i][0]),
    parseInt(arr[i][1]),
    parseInt(arr[i][2]),
  ];
  let [h, m, s] = [
    parseInt(arr[i][3]),
    parseInt(arr[i][4]),
    parseInt(arr[i][5]),
  ];

  if (s < S) {
    s += 60;
    m--;
    s -= S;
  } else {
    s -= S;
  }

  if (m < M) {
    m += 60;
    h--;
    m -= M;
  } else {
    m -= M;
  }

  h -= H;

  console.log(h, m, s);
}
