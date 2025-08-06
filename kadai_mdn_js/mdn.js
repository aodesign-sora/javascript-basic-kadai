const today = new Date();

const year = today.getUTCFullYear();
const month = today.getUTCMonth()+1;
const dayOfMonth = today.getUTCDate();

console.log(year + "年" + month + "月" + dayOfMonth + "日");