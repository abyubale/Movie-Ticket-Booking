import { useState } from "react";

const ShowTime = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="  ">
      <div className="flex p-4">
        <div
          className={`${
            isSelected ? "text-white bg-timeBtnBg" : "bg-white"
          } flex justify-center items-center border-1 p-4 rounded-xl  hover:cursor-pointer font-semibold text-green-600`}
          onClick={() =>
            isSelected ? setIsSelected(false) : setIsSelected(true)
          }
        >
          <span>09.10 AM</span>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
