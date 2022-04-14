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
    // f: function() {}
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
let { name: userName, age, job: userJob } = personObj_3;
console.log(userName, age, userJob);
console.log("====================================");

console.log("====================================");
const persons = [
  {
    name: "Jhon",
    surname: "Doe",
    age: 50,
  },
  {
    name: "Jane",
    surname: "Doe",
    age: 40,
  },
];

for (const { name } of persons) {
  console.log(name);
}
console.log("====================================");

console.log("====================================");
const personObj_4 = {
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

const personObj_5 = { ...personObj_4 };
const schoolObj = {
  school: "abc University",
};

// console.log(Object.assign(personObj_5, schoolObj));
console.log({ ...personObj_5, ...schoolObj });
console.log("====================================");

console.log("====================================");
const personObj_6 = {
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

let { address: userAddress, ...rest } = personObj_6;
console.log(userAddress, rest);
console.log("====================================");

console.log("====================================");
const personObj_7 = {
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

console.log(Object.keys(personObj_7));
console.log(Object.values(personObj_7));
console.log(Object.entries(personObj_7));
console.log("====================================");
