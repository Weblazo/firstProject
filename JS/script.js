"use strict"

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", " "),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", " "),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// Задача со звездочкой
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//    for (let j=0; j<i; j++) {
//       result += '*';
//    };
//    result += '\n';
// };

// console.log(result);

// ***************************

// Задача №1
let num = 5;

while (num < 11) {
   console.log(num);
   num++;
};

// Задача №2

let numTwo = 20;

for (let i = 1; i < 12; i++) {
   if (numTwo === 12) {
      break;
   };
   console.log(numTwo);
   numTwo--;
};

// Задача №3

for (let i = 1; i < 11; i++) {
   if (i % 2 != 0) {
      continue;
   };
   console.log(i);
};

// Задача №4

for (let i = 2; i <= 16; i++) {
       if (i % 2 === 0) {
           continue;
       } else {
           console.log(i);
       }
   }

let numFour = 16;

while (numFour < 16) {
   
}