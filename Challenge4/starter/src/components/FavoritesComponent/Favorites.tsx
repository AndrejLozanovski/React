import { useState, useEffect } from "react";
import { calculateRating } from "../../services/calculate-rating";
import { RestaurantCtxInterface } from "../../interfaces/RestaurantInterface";

export const Favorites = () => {
  const [favorites, setFavorites] = useState<RestaurantCtxInterface[]>([]);

  useEffect(() => {
    const favoriteRestoraunts = JSON.parse(localStorage.getItem("favoriteRestoraunts") || "[]");
    setFavorites(favoriteRestoraunts);
  }, []);

  const toggleFavorite = (restaurant: RestaurantCtxInterface) => {
    const isFavorite = favorites.some((fav) => fav.id === restaurant.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== restaurant.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favoriteRestoraunts", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, restaurant];
      setFavorites(updatedFavorites);
      localStorage.setItem("favoriteRestoraunts", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-uppercase mb-4 fw-bold text-center">Your Favorite Restaurants</h2>
      {favorites.map((restaurant: RestaurantCtxInterface, key: number) => (
        <div className="col" key={key}>
          <div className="card border-0 bg-light mt-4 w-100">
            <i
              className={"fa-solid fa-heart fa-xl text-danger favorite"}
              onClick={() => toggleFavorite(restaurant)}
              style={{ cursor: "pointer" }}
            ></i>
            <div className="text-dark text-decoration-none">
              <img src={restaurant.image} className="card-img-top rounded-3" alt="..." />

              <div className="card-body">
                <h5 className="card-title fw-bold m-0">{restaurant.businessname}</h5>
                <p className="card-text fw-bold text-orange m-0 mb-2">
                  {restaurant.restauranttype}
                </p>
                {restaurant.reviewsList.length !== 0 && (
                  <>
                    <p className="m-0">
                      Rating - {calculateRating(restaurant.reviewsList).toFixed(1)}{" "}
                      <i className="fa-solid fa-star text-warning"></i>
                    </p>
                    <small>based on {restaurant.reviewsList.length} reviews</small>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
