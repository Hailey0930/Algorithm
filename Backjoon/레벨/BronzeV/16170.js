const date = new Date();

date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

console.log(date.getFullYear());
console.log(
  parseInt(date.getMonth() + 1) < 10
    ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1
);
console.log(date.getDate());
