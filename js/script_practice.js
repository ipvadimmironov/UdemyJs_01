"use strict";

let  numberOfFilms;


function start() {
  
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }

}

function detectPersonalLevel() {
    if (numberOfFilms<10) {console.log("Просмотрено мало фильмов");}
    else if (numberOfFilms>=10 && numberOfFilms <30) {console.log("Все ок");} 
    else if (numberOfFilms>=30 ) {console.log("Вы кионман");} 
    else {console.log("error");}
}


function rememberFilms(){
    for (let cnt = 0; cnt < personalMovieDB.count; cnt++) {
        let movieName="";
        do {
            movieName = prompt("Назовите фильм") || "";
        }
        while (movieName.length == 0 || movieName.length > 50);
        
        
        
        let rank = +prompt("Поставьте оценку");
    
        personalMovieDB.movies[movieName] = rank;
    
    }
}

start();

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};



detectPersonalLevel();
rememberFilms();

console.log(numberOfFilms);


function showMyDB(){
    if (personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writetYourGenres(){
    for (let index = 1; index <= 3; index++) {
        const genre = prompt(`Ваш любимый жанр номер ${index}`);
        personalMovieDB.genres.push(genre);
        
    }
}

writetYourGenres();

console.log(personalMovieDB);

