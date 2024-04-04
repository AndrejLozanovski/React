import { useParams } from "react-router-dom";
import { useRestaurantsContext } from "../../context/RestaurantsContext";
import { RestaurantCard } from "../RestaurantCardComponent/RestaurantCard";

export const CuisineDetail = () => {
  const { restauranttype } = useParams();
  const { restaurants } = useRestaurantsContext();

  const filterRestaurants = restaurants.filter(
    (restaurant) => restaurant.restauranttype === restauranttype
  );

  if (!filterRestaurants.length) {
    return <div>Restaurant Type not found!</div>;
  }

  return (
    <div className="row py-4">
      <h2 className="text-uppercase mb-4 fw-bold text-center">{restauranttype} Restaurants</h2>
      {filterRestaurants.map((restaurant, key) => (
        <RestaurantCard restaurants={[restaurant]} key={key} />
      ))}
    </div>
  );
};
