let movies = [
  {
    id: 1,
    name: "Star Wars",
    score: 8
  },
  {
    id: 2,
    name: "Avengers",
    score: 9
  },
  {
    id: 3,
    name: "The Godfather",
    score: 6
  },
  {
    id: 4,
    name: "Logan",
    score: 4
  },
  {
    id: 5,
    name: "Inception",
    score: 10
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: Number(`${movies.length + 1}`),
    name,
    score
  };

  movies.push(newMovie);
  return newMovie;
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}