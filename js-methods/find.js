// method: find()

const numbers = [20, 18, 35, 26, 19];

console.clear();

numbers.find((n) => n === 20); // 20
numbers.find((n) => n === 200); // undefined
numbers.find((n) => n >= 30); // 30
