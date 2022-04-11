// method: every()

const numbers = [20, 18, 35, 26, 19];

console.clear();

const check = (n) => {
  return n >= 18;
};

numbers.every(check); // true

numbers.every((n, index, arr) => {
  // console.log(index, arr);
  return n % 2 === 0;
});

/*

0 [ 30, 26, 20, 19, 18 ]
1 [ 30, 26, 20, 19, 18 ]
2 [ 30, 26, 20, 19, 18 ]
3 [ 30, 26, 20, 19, 18 ]

*/
