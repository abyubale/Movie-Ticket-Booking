import SeatsPage from "../components/SeatsPage/SeatsPage";
import ShowTime from "../components/ShowTime/ShowTime";
import TimeandSeatDetails from "../components/TimeandSeatDetails/TimeandSeatDetails";

const BookSeats = () => {
  return (
    <>
      <TimeandSeatDetails />
      <div className="flex justify-center  items-center ">
        <div className="flex justify-center  items-center max-[1150px]:overflow-scroll    ">
          <SeatsPage />
        </div>
      </div>
    </>
  );
};

export default BookSeats;
