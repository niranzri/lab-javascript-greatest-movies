// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(
        (currentMovie) => {
            return currentMovie.director
        }
    );
    return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpielbergMovies = moviesArray.filter((currentMovie) => {
        if (currentMovie.director == "Steven Spielberg" && currentMovie.genre.includes("Drama")) {
            return true;
        }
        return false;
    });
    return SpielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0){
        return 0
    }

    const totalScore = moviesArray.reduce((accumulator, currentMovie) => {
        if (currentMovie.score) {
            return accumulator + currentMovie.score;
        } else {
            return accumulator;
        }
    }, 0); // the accumulator is set to 0. 
    const averageScore = Number((totalScore/moviesArray.length).toFixed(2)); 
    // .toFixed() returns a string, so you need to convert it to a number using the Number() function. 
    return averageScore;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((currentMovie) => {
        if (currentMovie.genre.includes("Drama") && typeof currentMovie.score === 'number'){
            return true;
        } 
        return false;
    });

    return scoresAverage(dramaMovies);
}

        

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYearArray = moviesArray.toSorted((movie1, movie2) => {
        if (movie1.year != movie2.year) {
            return movie1.year - movie2.year;
        } else {
            return movie1.title.localeCompare(movie2.title);
        }
    });
    return sortedByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titlesArray = moviesArray.map((currentMovie) => {
        return currentMovie.title;
    })

    const sortedTitlesArray = titlesArray.toSorted();

    if (titlesArray.length > 20) {
        titlesArray.length = 20;
        let arrayOf20 = [];
        for (let i=0; i< titlesArray.length; i++){
         arrayOf20[i] = sortedTitlesArray[i];
        }
    return arrayOf20;
    } else {
        return sortedTitlesArray;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const formattedArray = moviesArray.map((currentMovie) => {
        let totalMinutes = 0;
        if (currentMovie.duration.indexOf(' ') === -1){
            let hours = Number(currentMovie.duration.replace("h", ""));
            totalMinutes = hours*60;
        } else if (currentMovie.duration.indexOf(' ') != -1){
            const duration = currentMovie.duration.split(' ');
            let hours = Number(duration[0].replace("h", ""));
            const minutes = Number(duration[1].replace("min", "")); // or minutes.slice(0, -3)
            totalMinutes = hours*60+minutes;
        }
        const updatedMovie = { ...currentMovie, duration: totalMinutes }; 
        return updatedMovie;
        //The spred operator (`...`) creates a shallow copy of 'currentMovie' and modifies the 'duration' property of the copied object. 
    });
    return formattedArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray == 0){
        return null;
    }
}
