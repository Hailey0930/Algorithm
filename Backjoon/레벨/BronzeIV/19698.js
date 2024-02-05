const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, W, H, L] = input.map((el) => +el);

const answer = Math.floor(W / L) * Math.floor(H / L);

answer >= N ? console.log(N) : console.log(answer);
