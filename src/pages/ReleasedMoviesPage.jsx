import { useContext } from "react";
import Pagination from "../components/Pagination/Pagination";
import SelectList from "../components/SelectList/SelectList";
import { PageContext } from "../context/PageContext";
import ReleasedMovie from "../components/ReleasedMovie/ReleasedMovie";

const ReleasedMoviesPage = () => {
  const { totalResults, totalPages } = useContext(PageContext);
  return (
    <div>
      <div className="text-lg text-center mt-3">Select Year</div>
      <div className="flex justify-center">
        <SelectList />
      </div>
      <div
        className="flex justify-center m-3"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <ReleasedMovie />
      </div>

      <div>
        <Pagination totalResults={totalResults} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ReleasedMoviesPage;
