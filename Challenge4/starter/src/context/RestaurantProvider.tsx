import { RestaurantCtx, RestaurantCtxInterface } from "../interfaces/RestaurantInterface";
import { apiUrl } from "../globals/api-url";
import { contextChild } from "../interfaces/global-interface";
import { RestaurantsContext } from "./RestaurantsContext";
import { useApiData } from "../services/restaurant-service";
import { useEffect, useState } from "react";

export const RestaurantProvider = ({ children }: contextChild) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newReview, setNewReview] = useState<RestaurantCtxInterface[]>([]);
  const restaurants = useApiData<RestaurantCtxInterface[]>(apiUrl);

  useEffect(() => {
    if (restaurants !== undefined) {
      setLoading(false);
    }
  }, [restaurants]);

  const restaurantValue: RestaurantCtx = {
    restaurants,
    setNewReview,
  };

  return (
    <RestaurantsContext.Provider value={restaurantValue}>
      {loading ? <div>Loading...</div> : children}
    </RestaurantsContext.Provider>
  );
};
