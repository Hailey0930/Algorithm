const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((el) => {
  const earth = (+el).toFixed(2);
  const moon = (+el * 0.167).toFixed(2);

  moon > 0 &&
    console.log(
      `Objects weighing ${earth} on Earth will weigh ${moon} on the moon.`
    );
});
