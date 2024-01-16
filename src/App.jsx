import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <AppHeader />
      <PageRoutes />
    </>
  );
}

export default App;
