console.clear();

// spread   --> array or object
// rest     --> function params

const countries = [
  { id: 1, name: "Canada" },
  { id: 2, name: "Colombia" },
  { id: 3, name: "England" },
  { id: 4, name: "Guatemala" },
  { id: 5, name: "Korea" },
];

// const getNames = (name1, name2, name3, ...names) => {
//   console.log(name1);
//   console.log(name2);
//   console.log(name3);
//   console.log("---------------------------");
//   console.log(names);
// };

// getNames(countries[0], countries[1], countries[2], countries[3], countries[4]);

let newCountries = [...countries, { id: 6, name: "Taiwan" }];
console.log(newCountries);
