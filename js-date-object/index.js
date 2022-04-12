"use strict";
console.clear();
console.log("date object of javascript".toUpperCase());
console.log("--------------------------------- \n");

console.log("====================================");
console.log(new Date().toString());
console.log("====================================");

console.log("====================================");
console.log(new Date(0).toString());
console.log("====================================");

console.log("====================================");
console.log(new Date(24 * 3600 * 1000).toString());
console.log("====================================");

console.log("====================================");
console.log(new Date("2022-01-01").toString());
console.log("====================================");

console.log("====================================");
console.log(new Date(2022, 0, 1).toString());
console.log("====================================");

console.log("====================================");
console.log(new Date(2022, 0, 1, 15, 45, 5, 0).toString());
console.log("====================================");

console.log("====================================");
console.log(Date.parse("2022-01-1"), "===", new Date(2022, 0, 1).getTime());
console.log("====================================");
