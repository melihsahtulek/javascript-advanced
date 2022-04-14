"use strict";
console.clear();
console.log("using classes in javascript".toUpperCase());
console.log("--------------------------------- \n");

class Person {
  constructor(name, surname, age, job) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
  }

  fullName() {
    return this.name + " " + this.surname;
  }

  static date = "01/05/2022";
}

const jhon = new Person("Jhon", "Doe", 50, "Manager");
const jane = new Person("Jane", "Doe", 40, "Teacher");

console.log(jhon);
console.log(jhon.date); // undefined
console.log(Person.date);
