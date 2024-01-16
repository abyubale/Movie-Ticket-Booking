import Date from "../Date/Date";
import ShowTime from "../ShowTime/ShowTime";

const TimeandSeatDetails = () => {
  return (
    <div className="flex bg-showtimeBg justify-around ">
      <div className="flex">
        {" "}
        <Date />
        <ShowTime />
      </div>

      <div className="flex">
        <div className="flex justify-center items-center">
          <div className="bg-white w-6 border-1 h-6 rounded-md "></div>
          <div className="ms-2 text-center  text-xs flex justify-center items-center">
            AVAILABLE
          </div>
        </div>
        <div className="flex justify-center items-center ms-4">
          <div className=" bg-booked w-6 border-1 h-6 rounded-md  "></div>
          <div className="ms-2 text-center  text-xs flex justify-center items-center">
            BOOKED
          </div>
        </div>
        <div className="flex justify-center items-center ms-4">
          <div className=" bg-timeBtnBg w-6 border-1 h-6 rounded-md  "></div>
          <div className="ms-2 text-center  text-xs flex justify-center items-center">
            SELECTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeandSeatDetails;
