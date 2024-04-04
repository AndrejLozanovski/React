import { NavLink } from "react-router-dom";
import { RestaurantCtxInterface } from "../../interfaces/RestaurantInterface";
import { calculateRating } from "../../services/calculate-rating";
import { useEffect, useState } from "react";

export const RestaurantCard = ({ restaurants }: { restaurants: RestaurantCtxInterface[] }) => {
  const [favorites, setFavorites] = useState<RestaurantCtxInterface[]>([]);

  useEffect(() => {
    const favoriteRestoraunts = JSON.parse(localStorage.getItem("favoriteRestoraunts") || "[]");
    setFavorites(favoriteRestoraunts);
  }, []);

  const toggleFavorite = (restaurant: RestaurantCtxInterface) => {
    const updatedFavorites = favorites.some((fav) => fav.id === restaurant.id)
      ? favorites.filter((fav) => fav.id !== restaurant.id)
      : [...favorites, restaurant];

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteRestoraunts", JSON.stringify(updatedFavorites));
  };

  const renderRestaurants = () => {
    return restaurants.map((el: RestaurantCtxInterface, key: number) => {
      const rating = calculateRating(el.reviewsList);
      const isFavorite = favorites.some((fav) => fav.id === el.id);

      return (
        <div className="col" key={key}>
          <div className="card border-0 bg-light mt-4" style={{ width: "200px" }}>
            <i
              className={
                isFavorite
                  ? "fa-solid fa-heart fa-xl text-danger favorite"
                  : "fa-regular fa-heart fa-xl text-danger favorite"
              }
              onClick={() => toggleFavorite(el)}
              style={{ cursor: "pointer" }}
            ></i>
            <NavLink to={`/restaurantDetails/${el.id}`} className="text-dark text-decoration-none">
              <img
                src={el.image}
                className="card-img-top rounded-3 image"
                alt="..."
                style={{ width: "100%", height: "auto" }}
              />

              <div className="card-body">
                <h5 className="card-title fw-bold m-0">{el.businessname}</h5>
                <p className="card-text fw-bold text-orange m-0 mb-2">{el.restauranttype}</p>
                {el.reviewsList.length !== 0 && (
                  <>
                    <p className="m-0">
                      rating - {rating.toFixed(1)} <i className="fa-solid fa-star text-warning"></i>
                    </p>
                    <small>based on {el.reviewsList.length} reviews</small>
                  </>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return <>{renderRestaurants()}</>;
};
