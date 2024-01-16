import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../services/getUpcomingMovies";
import MovieCard from "../MovieCard/MovieCard";
import { useContext } from "react";
import { YearContext } from "../../context/YearContext";
import { useParams } from "react-router-dom";
import { PageContext } from "../../context/PageContext";

const ReleasedMovie = () => {
  const [allMovies, setAllMovies] = useState([]);
  const { pid } = useParams();

  const { year } = useContext(YearContext);
  const { pages, results, totalResults, totalPages } = useContext(PageContext);
  useEffect(() => {
    getUpcomingMovies(pid, year + "").then((res) => {
      console.log(res.total_pages);
      pages(res.total_pages);
      results(res.total_results);
      setAllMovies(res.results);
    });
  }, [year, pid, pages, results]);

  const cards = allMovies.map((item, index) => (
    <MovieCard
      key={index}
      title={item.title}
      poster={item.poster_path}
      genre1={item.genre_ids[0]}
      genre2={item.genre_ids[1]}
      lang={item.original_language}
      date={item.release_date}
      totalPages={totalPages}
      totalResults={totalResults}
      id={item.id}
    />
  ));
  return (
    <div>
      <div
        className="flex justify-center content-center flex-wrap gap-10"
        style={{ maxWidth: "1200px" }}
      >
        {cards}
      </div>
    </div>
  );
};

export default ReleasedMovie;
