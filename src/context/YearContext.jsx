import { createContext, useState } from "react";

export const YearContext = createContext();

const YearProvider = ({ children }) => {
  const [year, setYear] = useState("");

  const setValue = (year) => setYear(year);
  return (
    <YearContext.Provider value={{ setValue, year }}>
      {children}
    </YearContext.Provider>
  );
};

export default YearProvider;
