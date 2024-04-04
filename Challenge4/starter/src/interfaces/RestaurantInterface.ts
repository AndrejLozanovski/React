export interface RestaurantCtxInterface {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: Review[];
}

export interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

export interface RestaurantCtx {
  restaurants: RestaurantCtxInterface[];
  setNewReview: (restaurants: RestaurantCtxInterface[]) => void;
}
