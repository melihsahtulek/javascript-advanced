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

const writeMovies = () => {
  console.table(movies);
};

const addNewMovie = (movie, callback) => {
  console.log("adding new movie...");
  setTimeout(() => {
    movies.push(movie);
    callback();
  }, 500);
};

addNewMovie({ id: movies.length + 1, name: "Schindler's List", year: 1993, rating: 8.9 }, writeMovies);
