"use strict";

let  numberOfFilms;
function start() {
  
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }

}

start();

console.log(numberOfFilms);

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};


for (let cnt = 0; cnt < personalMovieDB.count; cnt++) {
    let movieName = prompt("Назовите фильм");
    let rank = +prompt("Поставьте оценку");

    personalMovieDB.movies[movieName] = rank;

}

console.log(personalMovieDB);