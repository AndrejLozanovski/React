import { NavLink } from "react-router-dom";
import { useRestaurantsContext } from "../../context/RestaurantsContext";

export const SurpriseRestaurant = () => {
  const { restaurants } = useRestaurantsContext();

  const getRandomRestaurant = () => {
    const randomIdx = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIdx];
    return randomRestaurant;
  };

  const handleSurpriseRestaurant = () => {
    const randomRestaurant = getRandomRestaurant();
    return `/restaurantDetails/${randomRestaurant.id}`;
  };

  return (
    <div className="text-center py-4 border-bottom">
      <h2 className="text-uppercase mb-4 fw-bold">Don't know what to eat?</h2>
      <NavLink to={handleSurpriseRestaurant()} className="btn btn-success w-100">
        Surprise me!
      </NavLink>
    </div>
  );
};
