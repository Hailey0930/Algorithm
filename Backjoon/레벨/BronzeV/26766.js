const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const hart =
  " @@@   @@@ \n@   @ @   @\n@    @    @\n@         @\n @       @ \n  @     @  \n   @   @   \n    @ @    \n     @     ";

for (let i = 1; i <= parseInt(input); i++) {
  console.log(hart);
}
