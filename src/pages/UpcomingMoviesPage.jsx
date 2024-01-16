import UpcomingMovies from "../components/UpcomingMovies.jsx/UpcomingMovies";

const UpcomingMoviesPage = () => {
  return (
    <div>
      <div
        className="flex justify-center m-3"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <UpcomingMovies />
      </div>
    </div>
  );
};

export default UpcomingMoviesPage;
