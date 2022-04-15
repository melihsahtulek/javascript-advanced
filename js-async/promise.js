"use strict";
console.clear();
console.log("async javascript".toUpperCase());
console.log("--------------------------------- \n");

const movies = [
  { id: 1, name: "The Shawshank Redemption", year: 1994, rating: 9.2 },
  { id: 2, name: "The Godfather", year: 1972, rating: 9.2 },
  { id: 3, name: "The Dark Knight ", year: 2008, rating: 9.0 },
  { id: 4, name: "The Godfather: Part II", year: 1974, rating: 9.0 },
  { id: 5, name: "12 Angry Men", year: 1957, rating: 9.0 },
];

let time = 0;

const addNewBook = (book) => {
  return new Promise((resolve, reject) => {
    try {
      if (book.name.length > 0) {
        time = new Date();
        setTimeout(() => {
          movies.push(book);
          resolve();
        }, 250);
      } else {
        throw new Error("an error!");
      }
    } catch (error) {
      reject(error);
    }
  });
};

const writeMovies = () => {
  for (const movie of movies) {
    console.log(movie);
  }
};

addNewBook({ id: movies.length + 1, name: "Schindler's List", year: 1993, rating: 8.9 })
  .then(() => writeMovies())
  .catch((error) => console.log(error))
  .finally(() => console.log(`\n${"finally".toUpperCase()}... ${new Date() - time}ms`));
