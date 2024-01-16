import { useEffect, useState } from "react";
import { getReleasedMovies } from "../../services/getUpcomingMovies";
import MovieCard from "../MovieCard/MovieCard";

const UpcomingMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [allUpcoming, setAllUpcoming] = useState([]);
  useEffect(() => {
    getReleasedMovies()
      .then((res) => {
        return res.total_pages;
      })
      .then((totalPages) => {
        const callAllPages = (pageNum) => {
          if (pageNum === 0) return Promise.resolve([]);
          return getReleasedMovies(pageNum).then((res) => {
            return callAllPages(pageNum - 1).then((data) => [
              ...data,
              ...res.results,
            ]);
          });
        };

        callAllPages(totalPages).then((allData) => {
          setAllMovies(allData);
          const today = new Date();

          const next15Days = allData.filter((movie) => {
            const releaseDate = new Date(movie.release_date);
            const timeDifference = releaseDate.getTime() - today.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            return daysDifference >= 0 && daysDifference <= 15;
          });

          const prev15Days = allData.filter((movie) => {
            const releaseDate = new Date(movie.release_date);
            const timeDifference = today.getTime() - releaseDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            return daysDifference >= 0 && daysDifference <= 15;
          });
          const uniqueUpcoming = [];
          const seenIds = new Set();

          [...prev15Days, ...next15Days].forEach((movie) => {
            if (!seenIds.has(movie.id)) {
              uniqueUpcoming.push(movie);
              seenIds.add(movie.id);
            }
          });

          setAllUpcoming(uniqueUpcoming);
        });
      });
  }, []);
  console.log(allMovies);
  console.log(allUpcoming);

  const items = allUpcoming.map((item, index) => (
    <MovieCard
      key={index}
      title={item.title}
      poster={item.poster_path}
      genre1={item.genre_ids[0]}
      genre2={item.genre_ids[1]}
      lang={item.original_language}
      isButton
      id={item.id}
    />
  ));
  return (
    <div
      className="flex justify-center content-center flex-wrap gap-10"
      style={{ maxWidth: "1200px" }}
    >
      {items}
    </div>
  );
};

export default UpcomingMovies;
