"use strict";
console.clear();
console.log("using classes in javascript".toUpperCase());
console.log("--------------------------------- \n");

class Person {
  // Person --> Superclass
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

class Teacher extends Person {
  // Teacher --> Subclass
  constructor(name, surname, age, department) {
    super(name, surname, age);
    this.department = department;
  }
}

const jhon = new Teacher("Jhon", "Doe", 50, "Math");

console.log("====================================");
console.log(jhon instanceof Person);
console.log(jhon);
console.log("====================================");
