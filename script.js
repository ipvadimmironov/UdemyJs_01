let numberOfFilms;

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

console.log(numberOfFilms);

let personalMovieDB = {
    count:0,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};


for (let cnt = 0; cnt < 2; cnt++) {
    let movieName = prompt("Назовите фильм");
    let rank = +prompt("Поставьте оценку");

    personalMovieDB.movies[movieName] = rank;

}