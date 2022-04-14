"use strict";
console.clear();
console.log("using objects in javascript".toUpperCase());
console.log("--------------------------------- \n");

console.log("====================================");
let name = "Jhon",
  surname = "Doe";

const personObj = {
  name, // name: name
  surname, // surname: surname
};
console.log(personObj);
console.log("====================================");

console.log("====================================");
let propertyName = "name";
let personObj_2 = {
  [propertyName]: "Jane",
  surname,
};
console.log(personObj_2);
console.log("====================================");

console.log("====================================");
const personObj_3 = {
  name: "Jhon",
  surname: "Doe",
  age: 50,
  job: "Manager",
  fullName() {
    return this.name + " " + this.surname;
  },
  address: {
    city: "Antalya",
    district: "Alanya",
  },
};
console.log(personObj_3.fullName());
console.log("====================================");

console.log("====================================");
let userAge = personObj_3.age;
let { age } = personObj_3;
console.log(userAge, age);
console.log("====================================");
