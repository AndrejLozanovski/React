import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavbarComponent/Navbar";
import { AllRestaurants } from "./components/AllRestaurantsComponent/AllRestaurants";
import { RestaurantDetail } from "./components/RestaurantDetailsComponent/RestaurantDetail";
import { PopularRestaurants } from "./components/PopularRestaurantsComponent/PopularRestaurants";
import { SurpriseRestaurant } from "./components/SurpriseRestaurantComponent/SurpriseRestaurant";
import { Cuisines } from "./components/CuisinesComponent/Cuisines";
import { CuisineDetail } from "./components/CuisineDetailComponent/CuisineDetail";
import { Favorites } from "./components/FavoritesComponent/Favorites";
import { Footer } from "./components/FooterComponent/Footer";
import { RestaurantProvider } from "./context/RestaurantProvider";

const App = () => {
  return (
    <div className="App wrapper">
      <RestaurantProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SurpriseRestaurant />
                  <PopularRestaurants />
                  <Cuisines />
                  <AllRestaurants />
                  <Footer />
                </>
              }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/restaurantDetails/:id" element={<RestaurantDetail />} />
            <Route path="/cusineDetails/:restauranttype" element={<CuisineDetail />} />
          </Routes>
        </Router>
      </RestaurantProvider>
    </div>
  );
};

export default App;
