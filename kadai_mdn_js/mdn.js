const date = new Date();

const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getYear(),
];

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString(undefined, options));