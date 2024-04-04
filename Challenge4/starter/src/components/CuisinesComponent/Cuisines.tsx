import { NavLink } from "react-router-dom";
import { useRestaurantsContext } from "../../context/RestaurantsContext";

export const Cuisines = () => {
  const { restaurants } = useRestaurantsContext();

  const restaurantTypes = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.restauranttype))
  );

  return (
    <div className="py-4 border-bottom text-center">
      <h2 className="text-uppercase  mb-4 fw-bold text-center">Cuisines</h2>
      {restaurantTypes.map((cuisine, index) => (
        <NavLink to={`/cusineDetails/${cuisine}`} key={index} className="btn btn-orange me-2 ">
          {cuisine}
        </NavLink>
      ))}
    </div>
  );
};
