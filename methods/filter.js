// method: filter()

const numbers = [20, 18, 35, 26, 19];

console.clear();

numbers.filter((n) => n >= 26); // [ 30, 26 ]

numbers.filter((n) => n % 2 === 0); // [ 30, 26, 20, 18 ]
