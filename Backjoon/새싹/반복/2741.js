const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);

// 아래처럼 작성하는 경우 시간초과 에러 발생
// 루프가 반복될 때마다 I/O작업을 수행함에 따라 다음 출력이 처리되기 전에 이전 출력이 완료될 때까지 기다려야 함
// 또한 많은 수의 I/O 작업(각 반복의 콘솔 로깅)으로 인한 누적 지연이 시간 제한을 초과할 수 있음

// for (let i = 1; i <= input; i++) {
//     console.log(i);
//   }
