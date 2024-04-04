import { useRestaurantsContext } from "../../context/RestaurantsContext";
import { RestaurantCard } from "../RestaurantCardComponent/RestaurantCard";

export const PopularRestaurants = () => {
  const { restaurants } = useRestaurantsContext();

  const sortByReviews = [...restaurants].sort(
    (a, b) => b.reviewsList.length - a.reviewsList.length
  );

  const top10Restaurants = sortByReviews.slice(0, 10);

  return (
    <div className="row py-4 border-bottom">
      <h2 className="text-uppercase mb-4 fw-bold text-center">Our most Popular Restaurants</h2>
      <RestaurantCard restaurants={top10Restaurants} />
    </div>
  );
};
