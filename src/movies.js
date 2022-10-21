// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// {
//     "title":"The Shawshank Redemption",
//     "year":1994,
//     "director":"Frank Darabont",
//     "duration":"2h 22min",
//     "genre":["Crime","Drama"],
//     "score":9.3
// }



function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((item) => {
        return item.director;
      })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter((item) => {
        return item.director === "Steven Spielberg" && item.genre.includes("Drama")
    })
    return stevenSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    } else {
        const sumScores = moviesArray
            .filter((item) => {return item.score !=null})
            .map((item) => {return item.score})
            .reduce((acum, vlrAtual) => {return acum + vlrAtual});
        let avgScore = sumScores/moviesArray.length;
        return Math.round(avgScore*100)/100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }else{
        const dramaFilms = moviesArray.filter((item) => {return item.genre.includes('Drama')})
        if(!dramaFilms.length){
            return 0;
        }else{
            const scoreDramaFilms = dramaFilms.map((item) => {return item.score})
            const sumScoreDrama = scoreDramaFilms.reduce((acum, vlrAtual) => {return acum + vlrAtual});
            let avgScoreDrama = sumScoreDrama/scoreDramaFilms.length;
            return Math.round(avgScoreDrama*100)/100;
        }   
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = [...moviesArray];
    copyMoviesArray.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title));
    return copyMoviesArray;
    
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMoviesArray = [...moviesArray];
    copyMoviesArray.sort((a,b) => a.title.localeCompare(b.title));
    const titlesMovies = copyMoviesArray.map((item) => {
        return item.title;
    })
    if (titlesMovies.length>20){
        const top20TitlesMovies = titlesMovies.slice(0,20);
        return top20TitlesMovies;
    }
    return titlesMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
