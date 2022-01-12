// method: map()

const numbers = [4, 9, 1, 16, 25];
const users = [
  {
    id: 1,
    name: "ab",
    surname: "c",
  },
  {
    id: 2,
    name: "def",
    surname: "g",
  },
];

console.clear();

numbers.map((n) => n + 1); // [ 5, 10, 2, 17, 26 ]
numbers.map((n) => Math.sqrt(n)); // [ 2, 3, 1, 4, 5 ]

// rest
users.map((user, index) => {
  return { ...users[index], fullName: `${user.name} ${user.surname}` };
});

/*

[
  { id: 1, name: 'ab', surname: 'c', fullName: 'ab c' },
  { id: 2, name: 'def', surname: 'g', fullName: 'def g' }
]

*/

// assign
users.map((user, index) => {
  return Object.assign(users[index], { fullName: `${user.name} ${user.surname}` });
});

/*

[
  { id: 1, name: 'ab', surname: 'c', fullName: 'ab c' },
  { id: 2, name: 'def', surname: 'g', fullName: 'def g' }
]

*/
