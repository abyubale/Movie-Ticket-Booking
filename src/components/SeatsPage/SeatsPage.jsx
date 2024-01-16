import { Button } from "react-bootstrap";
import { seats } from "../../constant/constant";
import SeatIcon from "../SeatIcon/SeatIcon";

const SeatsPage = () => {
  const row = (value) =>
    seats
      .filter((item) => item.row === value)
      .map((item, index) => (
        <SeatIcon
          value={item.seatNumber}
          key={index}
          id={item.id}
          seatNumber={item.seatNumber}
        />
      ));

  return (
    <div className="flex flex-col  p-8   max-[1150px]:overflow-scroll">
      <span className="text-center m-4 font-normal text-2xl">
        PREMIUM : ₹ 200
      </span>
      <div className="flex justify-between ">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          A
        </div>
        {row("A")}
      </div>
      <div className="flex justify-between mt-4 ">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          B
        </div>
        {row("B")}
      </div>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          C
        </div>
        {row("C")}
      </div>
      <hr className="mt-8" />
      <span className="text-center text-2xl"> EXECUTIVE : ₹ 150</span>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          D
        </div>
        {row("D")}
      </div>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          E
        </div>
        {row("E")}
      </div>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          F
        </div>
        {row("F")}
      </div>
      <hr className="mt-8" />
      <span className="text-center text-2xl"> NORMAL : ₹ 100</span>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          G
        </div>
        {row("G")}
      </div>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center  w-10">
          H
        </div>{" "}
        {row("H")}
      </div>
      <div className="flex justify-between mt-4">
        <div className="me-5 font-semibold fs-5 flex justify-center items-center w-10">
          I
        </div>
        {row("I")}
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <div className="text-center  font-semibold border-3 w-50 ms-20">
          SCREEN THIS WAY
        </div>
      </div>
      <div className="flex justify-center ms-20 mt-8 ">
        <Button className="bg-timeBtnBg hover:bg-timeBtnBg border-timeBtnBg hover:border-timeBtnBg">
          Book Tickets <span>₹ 400</span>
        </Button>
      </div>
    </div>
  );
};

export default SeatsPage;
