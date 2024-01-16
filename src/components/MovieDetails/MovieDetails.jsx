import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getCastDetails,
  getParticularMovieData,
} from "../../services/getUpcomingMovies";

const MovieDetails = () => {
  const { mid } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  useEffect(() => {
    getParticularMovieData(mid).then((details) => setMovieDetails(details));

    getCastDetails(mid).then((credits) => setMovieCredits(credits));
  }, [mid]);

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-800 text-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h2 className="text-4xl font-bold mb-4">{movieDetails.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{movieDetails.overview}</p>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Release Date:</span>
            <span className="font-semibold">{movieDetails.release_date}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Language:</span>
            <span className="font-semibold">
              {movieDetails.original_language}
            </span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Status:</span>
            <span className="font-semibold">{movieDetails.status}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Tagline:</span>
            <span className="font-semibold">{movieDetails.tagline}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Runtime:</span>
            <span className="font-semibold">
              {movieDetails.runtime} minutes
            </span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Revenue:</span>
            <span className="font-semibold">${movieDetails.revenue}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Popularity:</span>
            <span className="font-semibold">{movieDetails.popularity}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Budget:</span>
            <span className="font-semibold">${movieDetails.budget}</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Production Companies:</span>
            <div className="flex flex-wrap">
              {movieDetails.production_companies &&
                movieDetails.production_companies.map((company) => (
                  <span
                    key={company.id}
                    className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2"
                  >
                    {company.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Genres:</span>
            <div className="flex flex-wrap">
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">Cast</h3>
          <div className="flex overflow-scroll" style={{ maxHeight: "200px" }}>
            {movieCredits.cast &&
              movieCredits.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col items-center mr-4 mb-4"
                >
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/200"
                    }
                    alt={actor.name}
                    className="w-16 h-16 rounded-full mb-2 min-h-24 min-w-24 shadow-md"
                  />
                  <p className="text-sm text-center min-w-24">{actor.name}</p>
                  <p className="text-xs text-gray-500 min-h-24 min-w-24 text-center">
                    {actor.character}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
