import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/HeaderComponent/Header";
import { Footer } from "./components/FooterComponent/Footer";
import { Filters } from "./components/FiltersComponent/Filters";

function App() {
  return (
    <div className="container bg-white">
      <Header />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
