"use strict";
console.clear();
console.log("this keyword".toUpperCase());
console.log("--------------------------------- \n");

/*

console.log(this); // window
console.log(this.location); // window.location
console.log(this.location.href); // window.location.href
console.log(this === window); // true

*/

// CONSTRUCTOR FUNCTION
/*

 function Person(name, surname, age) {
   this.name = name;
   this.surname = surname;
   this.age = age;
 }

 const jhon = new Person("Jhon", "Doe", 50);
 console.log(jhon);
*/

/*

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const jhon = new Person("Jhon", "Doe", 50);
console.log(jhon);

*/

const jhon = {
  name: "Jhon",
  surname: "Doe",
  age: 50,
  getBirthDayYear() {
    // console.log(this); reference this object
    return new Date().getFullYear() - this.age;
  },
};

console.log(jhon, jhon.getBirthDayYear());
