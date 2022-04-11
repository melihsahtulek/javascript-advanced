"use strict";
console.clear();
console.log("school management system".toUpperCase());
console.log("--------------------------------- \n");

const lessons = [
  { id: 1, name: "Math" },
  { id: 2, name: "Literature" },
  { id: 3, name: "Physics" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Business" },
];

const departments = [
  { id: 1, name: "Math", lessonsID: [1, 3] },
  { id: 2, name: "Business Administration", lessonsID: [1, 2, 5] },
  { id: 3, name: "Electrical Engineering", lessonsID: [1, 3, 4] },
];

class School {
  constructor(id, name, surname, age, department) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.department = department;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends School {
  constructor(id, name, surname, age, department, studentID) {
    super(id, name, surname, age, department);
    this.studentID = studentID;
  }

  getFullName() {
    return super.getFullName();
  }

  getDepartment() {
    let { name } = departments.filter((department) => department.id === this.department)[0];
    return name;
  }
}

const student_1 = new Student(1, "Riacán", "Beatty", 18, 1, 11015475895);
const student_2 = new Student(2, "Ram", "Cinege", 20, 2, 11015475877);

const writeValues = (...students) => {
  let studentsArray = [...students];
  for (const student of studentsArray) {
    console.log(`full name...: ${student.getFullName()}, age...: ${student.age}, department...: ${student.getDepartment()}, studentID...: ${student.studentID}`);
  }
};

writeValues(student_1, student_2);
