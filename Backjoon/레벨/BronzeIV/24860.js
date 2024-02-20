const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [k, l, h] = input.map((el) => el.trim());

const [vk, jk] = k.split(" ").map((el) => +el);
const [vl, jl] = l.split(" ").map((el) => +el);
const [vh, dh, jh] = h.split(" ").map((el) => +el);

console.log((vk * jk + vl * jl) * (vh * dh * jh));
