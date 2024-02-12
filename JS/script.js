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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", " "),
          b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('Done');
        personalMovieDB.movies[a] = b;
    } else {
        console.log('Error');
        i--;
    }
    
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("произошла ошибка");
    }
}

console.log(personalMovieDB);