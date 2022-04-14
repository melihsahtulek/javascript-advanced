"use strict";
console.clear();
console.log("using objects in javascript".toUpperCase());
console.log("--------------------------------- \n");

/*

const person = {
  name: "Jhon",
  surname: "Doe",
  age: 50,
  job: "Manager",
  fullName: function () {
    return this.name + " " + this.surname;
  },
  address: {
    city: "Antalya",
    district: "Alanya",
  },
};

*/

// CONSTRUCTOR
/*

function Person(name, surname, age) {
  const obj = {};
  obj.name = name;
  obj.surname = surname;
  obj.age = age;
  obj.fullName = function () {
    return obj.name + " " + obj.surname;
  };

  return obj;
}

*/

// CONSTRUCTOR
/*

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname;
  };
}

*/

// OBJECT CONSTRUCTOR
/*

const person = new Object();
person.name = "Jhon";
person.surname = "Doe";
person.age = 50;
person.fullName = function () {
  return this.name + " " + this.surname;
};

*/
