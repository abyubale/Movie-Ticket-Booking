export const getUpcomingMovies = (pagenum = "1", year = "2024") => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=77268bc24622a262b5288e9b79c21647&page=${pagenum}&with_original_language=hi&primary_release_year=${year}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getReleasedMovies = (pagenum = "1") => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=77268bc24622a262b5288e9b79c21647&language=en-US&page=${pagenum}&sort_by=release_date&with_original_language=hi&primary_release_year=2024`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getParticularMovieData = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=77268bc24622a262b5288e9b79c21647`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getCastDetails = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=77268bc24622a262b5288e9b79c21647`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
