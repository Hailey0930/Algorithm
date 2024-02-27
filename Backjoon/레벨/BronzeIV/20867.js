const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, S, G] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());
const [A, B] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());
const [L, R] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());

const l = L / A;
const r = R / B;

const ls = M % G ? M / G + 1 : M / G;
const rs = M % S ? M / S + 1 : M / S;

if (ls + l < rs + r) console.log("friskus");
else console.log("latmask");
