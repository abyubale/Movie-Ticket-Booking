import { Route, Routes } from "react-router-dom";
import route from "../routes/route.json";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Signup from "../components/Signup/Signup";
import ReleasedMoviesPage from "../pages/ReleasedMoviesPage";
import UpcomingMoviesPage from "../pages/UpcomingMoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import BookSeats from "../pages/BookSeats";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />
      <Route path={route.LOGIN} element={<LoginPage />} />
      <Route path={route.SIGNUP} element={<Signup />} />
      <Route path={route.RELEASED_MOVIES}>
        <Route path=":pid" element={<ReleasedMoviesPage />} />
      </Route>
      <Route path={route.UPCOMING_MOVIES}>
        <Route index element={<UpcomingMoviesPage />} />
      </Route>
      <Route path={route.MOVIE_DETAILS}>
        <Route path=":mid" element={<MovieDetailsPage />} />
      </Route>
      <Route path={route.BOOK_SEATS}>
        <Route path=":tid" element={<BookSeats />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
