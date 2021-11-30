export let movies = [
    {
     id : 1,
      name: "titanic",
      score : 100

    },
    {
     id : 2,
      name: "metrix",
      score : 100

    }
  ];

export const getById = id =>{
  const filteredPeople = movies.filter(movie=> movie.id === id);
  return filteredPeople[0];
}

export const getMovies = ()=> movies;

export const deleteMovie = (id) =>{
  const clearMoviles = movies.filter(movie => movie.id !== id);
  if(movies.length > clearMoviles.length){
    movies = clearMoviles;
    return true;
  }
  return false;
}

export const addMovie = (name,score)=>{
  const newMovie = {
    id : `${getMovies().length + 1}`,
    name ,
    score
  };
  movies.push(newMovie);
  return newMovie;
}