const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (x, i, value) {
  return value.indexOf(x) === i;
});
console.log(result);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    // return true;
    console.log(year + "年はうるう年です");
  } else {
    console.log(year + "年はうるう年ではありません");
    // return false;
  }
}
leapYear(2020);
leapYear(2021);

// let lastYear = 2020;
// if(leapYear(lastYear)){
//   console.log(lastYear + "年はうるう年です");
// }else{
//   console.log(lastYear + "年はうるう年ではありません");
// }
// let thisYear = 2021;
// if(leapYear(thisYear)){
//   console.log(thisYear　+ "年はうるう年です");
// }else{
//   console.log(thisYear + "年はうるう年ではありません");
// }