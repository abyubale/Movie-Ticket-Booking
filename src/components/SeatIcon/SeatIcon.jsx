import { useState } from "react";

const SeatIcon = ({ value, id, seatNumber }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`${isSelected ? " bg-timeBtnBg text-white" : ""}  ${
        seatNumber === 4 || seatNumber === 13 ? "ms-16" : ""
      } w-10  p-0.5 text-center rounded-md border-solid border-timeBtnBg border-1  hover:bg-timeBtnBg hover:cursor-pointer hover:text-white inline-block me-3`}
      onClick={() => {
        isSelected ? setIsSelected(false) : setIsSelected(true);
        console.log(id);
      }}
    >
      {value}
    </div>
  );
};

export default SeatIcon;
