const date = new Date();

const year = date.getFullYear();

let month = "";
Number(date.getMonth() + 1) < 10
  ? (month = `0${date.getMonth() + 1}`)
  : (month = `${date.getMonth() + 1}`);

const day = date.getDate();

console.log(`${year}-${month}-${day}`);
