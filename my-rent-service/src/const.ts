const Setting = {
  rentalOffersCount: 312,
} as const;
export { Setting };

const AppRoute = {
  Main: "/",
  Login: "/login",
  Favorites: "/favorites",
  Offer: "/offer",
  Error404: "error404",
} as const;

const AuthorizationStatus = {
  Auth: "AUTH",
  NoAuth: "NO_AUTH",
  Unknown: "UNKNOWN",
};

export { AppRoute, AuthorizationStatus };