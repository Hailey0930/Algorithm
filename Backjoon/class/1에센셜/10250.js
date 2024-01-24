const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(1);

const hotel = arr.map((el) => el.trim().split(" "));

for (let i = 0; i < input[0]; i++) {
  const [H, W, N] = hotel[i];

  // 방번호 앞자리
  const front = N % H === 0 ? H : N % H || 1;
  // 방번호 뒷자리
  const back = Math.ceil(N / H) || 1;

  console.log(`${back.toString().length === 1 ? `${front}0` : front}${back}`);
}
