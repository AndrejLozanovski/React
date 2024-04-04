import { RestaurantCtx } from "../interfaces/RestaurantInterface";
import { useContext, createContext } from "react";

export const RestaurantsContext = createContext({} as RestaurantCtx);

export const useRestaurantsContext = () => useContext(RestaurantsContext);
