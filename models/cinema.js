const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.listOfAllFilmTitles = function(){
        const result = this.films.map((film) => {  return film.title })
        return result;
}

Cinema.prototype.findFilmByTitle = function(title){
      let found = this.films.find(function(film){
        if (film.title === title){
          return film;
        }
      })
    return found;
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result;
}

Cinema.prototype.isThereAMovieFrom = function(year){
  let result = this.films.some((film)=>{
    return film.year === year;
  })
  return result;
}




module.exports = Cinema;
