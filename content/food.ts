export type Restaurant = {
  name: string;
  city: string;
  cuisine?: string;
  note?: string;
  href?: string;
};

export const restaurants: Restaurant[] = [
  // TODO: add favorite restaurants
  // Example:
  // {
  //   name: "Estela",
  //   city: "New York, NY",
  //   cuisine: "Mediterranean",
  //   note: "The burrata with salsa verde is the move.",
  //   href: "https://www.estelanyc.com",
  // },
];
