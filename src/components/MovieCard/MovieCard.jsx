import { Button } from "react-bootstrap";
import { genreMapping } from "../../constant/constant";
import { NavLink, useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
const MovieCard = ({
  title,
  poster,
  genre1,
  genre2,
  lang,
  date,
  isButton = false,
  id,
}) => {
  const gen1 = genreMapping[genre1];
  const gen2 = genreMapping[genre2];

  const apiDate = date;
  const options = { year: "numeric", month: "short", day: "numeric" };

  const formattedDate = new Date(apiDate).toLocaleDateString("en-GB", options);

  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "270px" }}>
        <NavLink to={`/${route.MOVIE_DETAILS}/${id}`}>
          <div
            style={{
              height: "400px",
            }}
          >
            <div
              style={{
                backgroundImage: poster
                  ? `url(https://image.tmdb.org/t/p/w500/${poster})`
                  : 'url("/img_not_available.png")',
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                display: "flex",
                backgroundPosition: "center",
                backGroundWrap: "nowrap",
                flexDirection: "column",
                justifyContent: "flex-end",
                borderRadius: "10px 10px 0 0",
              }}
              className="flex-col justify-end"
            >
              {date && (
                <>
                  <span className="ps-3 text-white">Release Date</span>
                  <p className="text-white ps-3 font-semibold pb-3">
                    {formattedDate}
                  </p>
                </>
              )}
            </div>
          </div>
        </NavLink>
        <div
          className=""
          style={{
            borderBottom: "1px solid #ddd",
            borderLeft: "1px solid #ddd",
            borderRight: "1px solid #ddd",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <NavLink to={`/${route.MOVIE_DETAILS}/${id}`} className="bg-gray-800">
            <p
              className="pt-3 ms-3 font-bold leading-8"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
            >
              {title}
            </p>
          </NavLink>
          <NavLink to={`/${route.MOVIE_DETAILS}/${id}`}>
            <p className="ms-3">{lang ? "Hindi" : ""}</p>
            <p className="pb-3 ms-3" style={{ minHeight: "50px" }}>
              {gen1} {gen2 ? `,${gen2}` : ""}
            </p>
          </NavLink>
          {isButton && (
            <div className="flex justify-center mb-4">
              <Button
                variant="success"
                className=" bg-blue-600"
                onClick={() => navigate(`/${route.BOOK_SEATS}/${id}`)}
              >
                Book Tickets
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
