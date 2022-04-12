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

const writeMovies = (list, callback) => {
  for (const movie of list) {
    console.log(movie);
  }
  console.log("\n");
  callback();
};

const addNewMovie = (movie, callback) => {
  console.log("adding new movie...\n");
  setTimeout(() => {
    movies.push(movie);
    callback();
  }, 500);
};

const filterByRating = (minRank, callback) => {
  console.log("filtering by rating...");
  setTimeout(() => {
    callback(movies.filter((movie) => movie.rating >= minRank));
  }, 750);
};

const filterByDate = (minYear, callback) => {
  console.log("filtering by year...");
  setTimeout(() => {
    callback(movies.filter((movie) => movie.year >= minYear));
  }, 250);
};

let movie_1 = { id: movies.length + 1, name: "Schindler's List", year: 1993, rating: 8.9 };

addNewMovie(movie_1, () =>
  filterByRating(9.2, (data) =>
    writeMovies(data, () => {
      filterByDate(2000, (data) => {
        writeMovies(data, () => {
          writeMovies(movies, () => {});
        });
      });
    })
  )
);
