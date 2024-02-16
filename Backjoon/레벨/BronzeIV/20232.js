const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const contest = {
  1996: "SPbSU",
  1997: "SPbSU",
  2000: "SPbSU",
  2006: "PetrSU, ITMO",
  2007: "SPbSU",
  2008: "SPbSU",
  2013: "SPbSU",
  2018: "SPbSU",
};

contest[input] ? console.log(contest[input]) : console.log("ITMO");
