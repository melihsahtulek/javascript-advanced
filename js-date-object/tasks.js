"use strict";
console.clear();
console.log("date object of javascript - tasks".toUpperCase());
console.log("--------------------------------- \n");

console.log("====================================");
console.log(new Date(2012, 1, 20, 3, 12).toString());
console.log(new Date("2012-02-20 03:12").toString());
console.log("====================================");
console.log("\n");
console.log("====================================");
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getWeekDay = (...d) => {
  return daysOfTheWeek[d[0].getDay()];
};
console.log(getWeekDay(new Date(2022, 3, 13)));
console.log("====================================");
console.log("\n");
console.log("====================================");
const getDateAgo = (date, day) => {
  return new Date(date.setDate(date.getDate() - day)).toString();
};

console.log(getDateAgo(new Date(2015, 0, 2), 365));
console.log("====================================");
console.log("\n");
console.log("====================================");
const getLastDayOfMonth = (year, month) => {
  let day = 1;
  let date = new Date(year, month, 1);
  while (true) {
    if (month === date.getMonth()) {
      day++;
      date.setDate(day);
    } else {
      day--;
      break;
    }
  }

  return day;
};

console.log(getLastDayOfMonth(2022, 0));
console.log(getLastDayOfMonth(2022, 1));
console.log(getLastDayOfMonth(2022, 2));
console.log(getLastDayOfMonth(2022, 3));
console.log(getLastDayOfMonth(2022, 4));
console.log("====================================");
