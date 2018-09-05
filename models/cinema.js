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




module.exports = Cinema;
