const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [limit, over] = input.map((el) => +el);

if (over <= limit)
  console.log("Congratulations, you are within the speed limit!");
else {
  const result = over - limit;

  let fine = 0;

  if (result <= 20) fine = 100;
  else if (result <= 30) fine = 270;
  else if (result > 30) fine = 500;

  console.log(`You are speeding and your fine is $${fine}.`);
}
