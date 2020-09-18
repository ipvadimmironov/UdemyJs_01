"use strict";

let numberOfFilms;

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

if (numberOfFilms<10) {console.log("Просмотрено мало фильмов");}
else if (numberOfFilms>=10 && numberOfFilms <30) {console.log("Все ок");} 
else if (numberOfFilms>=30 ) {console.log("Вы кионман");} 
else {console.log("error");}


console.log(numberOfFilms);

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};


for (let cnt = 0; cnt < personalMovieDB.count; cnt++) {
    let movieName="";
    do {
        movieName = prompt("Назовите фильм") || "";
    }
    while (movieName.length == 0 || movieName.length > 50);
    
    
    
    let rank = +prompt("Поставьте оценку");

    personalMovieDB.movies[movieName] = rank;

}

console.log(personalMovieDB);