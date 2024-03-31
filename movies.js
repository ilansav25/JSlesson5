var movies = [
    { movieName: "Armageddon", movieRating: 5 },
    { movieName: "Inception", movieRating: 4 },
    { movieName: "The Shawshank Redemption", movieRating: 5 },
    { movieName: "The Godfather", movieRating: 5 },
    { movieName: "Avengares: endgame", movieRating: 4.5 },
    { movieName: "The Last Samurai", movieRating: 5 },
    { movieName: "The Dar knight", movieRating: 5 },
];

//ex1
function getMovieByRating(movies, rating) {
    for (let index = 0; index < movies.length; index++) {
        var singleMovie = movies[index];
        if (singleMovie.movieRating === rating) {
            return singleMovie;
        }
    }
    return null;
}

var ratingToFind = 5;
console.log(getMovieByRating(movies, ratingToFind));

//ex2
function addMovies() {
    var movies = [];
    for (var i = 0; i < 3; i++) {
        var movieName = prompt("Enter the name of movie " + (i + 1) + ":");
        var movieRating = parseFloat(prompt("Enter the rating of movie " + (i + 1) + ":"));
        var movie = { movieName: movieName, movieRating: movieRating };
        movies.push(movie);
    }

    return movies;
}

var userMovies = addMovies();
console.log(userMovies);

//ex3
function getMoviesByRatingThreshold(movies) {
    var ratingThreshold = parseFloat(prompt("Enter the rating threshold:"));
    var selectedMovies = [];
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (movie.movieRating > ratingThreshold) {
            selectedMovies.push(movie);
        }
    }

    return selectedMovies;
}
var higherRatedMovies = getMoviesByRatingThreshold(userMovies);
console.log("Movies with rating higher than the threshold:", higherRatedMovies);

//ex4
function deleteMovieByTitle(movies, movieName) {

    for (var i = 0; i < movies.length; i++) {
        if (movies[i].movieName.toLowerCase() === movieName.toLowerCase()) {
            movies.splice(i, 1);
            break;
        }
    }
}
console.log("Movies before deletion:", userMovies);
var movieToDelete = prompt("Write the names of the movies you wish to delete:");
deleteMovieByTitle(userMovies, movieToDelete);
console.log("Movies after deletion:", userMovies);
