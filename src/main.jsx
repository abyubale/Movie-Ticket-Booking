import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import YearProvider from "./context/YearContext.jsx";
import PageProvider from "./context/PageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <YearProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </YearProvider>
  </BrowserRouter>
);
