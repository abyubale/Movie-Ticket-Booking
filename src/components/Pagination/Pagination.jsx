import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { NavLink, useParams } from "react-router-dom";
import route from "../../routes/route.json";

const Pagination = ({ totalPages, totalResults }) => {
  const { pid } = useParams();

  const classes =
    "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex";

  const classes1 =
    "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex";
  const activeClasses = (isActive) =>
    isActive ? `${classes1} text-white bg-indigo-600` : `${classes}`;

  const generatePaginationLinks = () => {
    const links = [];
    for (let page = 1; page <= totalPages; page++) {
      links.push(
        <NavLink
          key={page}
          to={`/${route.RELEASED_MOVIES}/${page}`}
          className={({ isActive }) => activeClasses(isActive)}
        >
          {page}
        </NavLink>
      );
    }
    return links;
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {pid !== "1" && (
              <NavLink
                to={`/${route.RELEASED_MOVIES}/${parseInt(pid, 10) - 1}`}
                className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </NavLink>
            )}

            {generatePaginationLinks()}

            {pid !== totalPages + "" && (
              <NavLink
                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
                to={`/${route.RELEASED_MOVIES}/${parseInt(pid, 10) + 1}`}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
