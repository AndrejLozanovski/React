import { RestaurantCard } from "../RestaurantCardComponent/RestaurantCard";
import { useRestaurantsContext } from "../../context/RestaurantsContext";

export const AllRestaurants = () => {
  const { restaurants } = useRestaurantsContext();

  return (
    <div className="row py-4 border-bottom">
      <h2 className="text-uppercase mb-4 fw-bold text-center">All Restaurants</h2>
      <RestaurantCard restaurants={restaurants} />
    </div>
  );
};
