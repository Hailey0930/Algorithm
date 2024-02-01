const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const classroom = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: "B101",
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

input.forEach((el) => {
  console.log(classroom[el.trim()]);
});
