import { createContext, useState } from "react";

export const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [totalPages, setTotalPages] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const pages = (num) => setTotalPages(num);
  const results = (input) => setTotalResults(input);
  return (
    <PageContext.Provider value={{ pages, results, totalPages, totalResults }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
