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

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", " "),
//           b = prompt("На сколько оцените его?", "");
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('Error');
//         i--;
//     }
    
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("произошла ошибка");
//     }
// }

// console.log(personalMovieDB);

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");

function calc(a, b) {
    return(a * b);
}

console.log(calc(5, 4));
console.log(calc(87, 5666556));
console.log(calc(7, 5));

const logger = function() {
    console.log("Hello");
};

const calc = (a, b) => a + b;

// *****

let usdCurr = 38;
let eurCurr = 41.6;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, eurCurr);
convert(500, usdCurr);

// *****

let usdtCurr = 44;
let discount = 0.8;

function calculate(amnt, usdtCurr) {
    return amnt * usdtCurr;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(calculate(1000, usdtCurr));

//****

function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Benya'))


function returnNeighboringNumbers(num) {
    return [num -1, num, num +1];
}

console.log(returnNeighboringNumbers(4))


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(3, 5))