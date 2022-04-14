"use strict";
console.clear();
console.log("using objects in javascript".toUpperCase());
console.log("--------------------------------- \n");

function Person(name, surname, age, job, city, district) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.job = job;
  this.fullName = function () {
    return this.name + " " + this.surname;
  };
  this.address = {
    city: city,
    district: district,
  };
}

const jhon = new Person("Jhon", "Doe", 50, "Manager", "Antalya", "Alanya");
const jane = new Person("Jane", "Doe", 40, "Teacher", "Antalya", "Alanya");
Person.prototype.gender = "";
jhon.gender = "Male";
console.log(jhon);
jane.gender = "Female";
console.log(jane);
// console.log(jhon.hasOwnProperty("gender"));
