import { useParams } from "react-router-dom";
import { useRestaurantsContext } from "../../context/RestaurantsContext";
import { Review } from "../../interfaces/RestaurantInterface";
import { calculateRating } from "../../services/calculate-rating";
import { FormRange } from "../../services/form-range";
import { useState } from "react";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const { restaurants, setNewReview } = useRestaurantsContext();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const restaurant = restaurants.find((restaurant) => restaurant.id == id);

  if (!restaurant) {
    return <div>Restaurant not found!</div>;
  }

  const handleRangeStarsChange = (starsValue: number) => {
    setStars(starsValue);
  };

  const renderReviews = () => {
    if (restaurant.reviewsList.length === 0) {
      return null;
    }

    return (
      <>
        <h2 className="text-uppercase py-4 m-0 fw-bold text-center">Reviews</h2>
        {restaurant.reviewsList.map((review: Review, key: number) => (
          <div className="card border-0 bg-light mt-4" key={key}>
            <p>
              <strong>Author: </strong>
              {review.author}
            </p>
            <p>
              <strong>Comment: </strong>
              {review.comment}
            </p>
            <p>
              <strong>Stars: </strong>
              {review.stars} <i className="fa-solid fa-star text-warning"></i>
            </p>
          </div>
        ))}
      </>
    );
  };

  const renderReviewForm = () => {
    const handleFormSubmit = (e: any) => {
      e.preventDefault();

      const newReview = {
        id: Date.now(),
        author: name,
        comment: comment,
        stars: stars,
      };

      fetch(`http://localhost:5001/restaurants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...restaurant,
          reviewsList: [...restaurant.reviewsList, newReview],
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to add review");
          }
          return res.json();
        })
        .then((updateReviews) => {
          setNewReview(updateReviews);
        })
        .then(() => {
          setName("");
          setComment("");
          setStars(0);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    };

    return (
      <>
        <h2 className="text-uppercase py-4 m-0 fw-bold text-center">Form Reviews</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Comment</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <FormRange onRangeChange={handleRangeStarsChange} />
          <button type="submit" className="btn btn-success w-100 mt-4">
            Leave a review
          </button>
        </form>
      </>
    );
  };

  return (
    <div className="py-4">
      <h2 className="text-uppercase mb-4 fw-bold text-center">{restaurant.businessname}</h2>
      <div className="card border-0 bg-light mt-4" key={restaurant.id}>
        <img src={restaurant.image} className="card-img-top rounded-3 " alt="..." />
        <div className="card-body">
          {restaurant.reviews !== 0 && (
            <>
              <p className="m-0">
                <strong>Rating</strong> - {calculateRating(restaurant.reviewsList).toFixed(1)}{" "}
                <i className="fa-solid fa-star text-warning"></i>
              </p>
              <small>based on {restaurant.reviewsList.length} reviews</small>
            </>
          )}
          <p className="mt-3">
            <strong>Phone number: </strong>
            {restaurant.phone}
          </p>
          <p>
            <strong>Address: </strong>
            {restaurant.address}
          </p>
          {restaurant.parkinglot === true && (
            <>
              <p>
                <strong>Parking lot: </strong>We have a parking lot waiting for you
              </p>
            </>
          )}
        </div>
      </div>
      {renderReviews()}
      {renderReviewForm()}
    </div>
  );
};
