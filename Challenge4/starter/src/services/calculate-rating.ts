export const calculateRating = (reviewsList: { stars: number }[]) => {
  let totalStars = 0;
  let totalReviews = reviewsList.length;

  reviewsList.forEach((review) => {
    totalStars += review.stars;
  });

  return totalReviews > 0 ? totalStars / totalReviews : 0;
};
