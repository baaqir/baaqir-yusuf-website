export type Country = {
  code: string; // ISO 3166-1 alpha-3
  name: string;
  cities?: string;
};

export type USState = {
  abbrev: string;
  name: string;
  cities?: string;
};

export const countries: Country[] = [
  { code: "USA", name: "United States", cities: "Home base — see states below" },
  { code: "CAN", name: "Canada", cities: "Toronto, Whistler, Vancouver" },
  { code: "MEX", name: "Mexico", cities: "Cancun, Mexico City, Cabo San Lucas" },
  { code: "CRI", name: "Costa Rica", cities: "San Jose, Puntarenas" },
  { code: "DOM", name: "Dominican Republic", cities: "Punta Cana" },
  { code: "BHS", name: "Bahamas", cities: "Nassau" },
  { code: "ABW", name: "Aruba", cities: "Oranjestad" },
  { code: "FRA", name: "France", cities: "Paris, Versailles" },
  { code: "GBR", name: "United Kingdom", cities: "London" },
  { code: "DEU", name: "Germany", cities: "Munich, Berlin, Nuremberg" },
  { code: "IND", name: "India", cities: "Mumbai, Goa, Vapi, Delhi, Pune, Nasik, Shaahada" },
  { code: "SGP", name: "Singapore" },
  { code: "MYS", name: "Malaysia", cities: "Kuala Lumpur" },
  { code: "ZAF", name: "South Africa", cities: "Johannesburg, Cape Town" },
  { code: "THA", name: "Thailand", cities: "Phuket, Bangkok, Phi Phi Islands" },
  { code: "ARE", name: "UAE", cities: "Dubai, Abu Dhabi" },
  { code: "PAK", name: "Pakistan", cities: "Karachi, Islamabad, Lahore, Peshawar" },
  { code: "ECU", name: "Ecuador", cities: "Quito, Guayaquil" },
  { code: "PER", name: "Peru", cities: "Lima, Cusco, Pucallpa" },
  { code: "ESP", name: "Spain", cities: "Barcelona, Ibiza, Malaga, Madrid, Mallorca" },
  { code: "PRT", name: "Portugal", cities: "Lisbon, Porto" },
  { code: "PHL", name: "Philippines", cities: "Cebu City, Manila" },
  { code: "NLD", name: "Netherlands", cities: "Amsterdam" },
  { code: "GRC", name: "Greece", cities: "Mykonos" },
  { code: "CHE", name: "Switzerland", cities: "Zurich, Lucerne, Interlaken" },
];

export const states: USState[] = [
  { abbrev: "NY", name: "New York", cities: "New York City" },
  { abbrev: "NJ", name: "New Jersey", cities: "New Brunswick" },
  { abbrev: "NC", name: "North Carolina", cities: "Cary, Chapel Hill, Raleigh" },
  { abbrev: "WY", name: "Wyoming", cities: "Yellowstone" },
  { abbrev: "MT", name: "Montana" },
  { abbrev: "CO", name: "Colorado", cities: "Denver" },
  { abbrev: "CA", name: "California", cities: "San Francisco, LA" },
  { abbrev: "GA", name: "Georgia", cities: "Atlanta, Albany" },
  { abbrev: "TN", name: "Tennessee", cities: "Smoky Mountains, Nashville" },
  { abbrev: "MD", name: "Maryland", cities: "D.C., Baltimore" },
  { abbrev: "VA", name: "Virginia", cities: "Richmond, Virginia Beach" },
  { abbrev: "FL", name: "Florida", cities: "Orlando, Miami" },
  { abbrev: "HI", name: "Hawaii", cities: "Oahu, Maui, Kauai" },
  { abbrev: "SC", name: "South Carolina", cities: "Myrtle Beach, Charleston" },
  { abbrev: "NV", name: "Nevada", cities: "Las Vegas" },
  { abbrev: "DE", name: "Delaware", cities: "Wilmington" },
  { abbrev: "PA", name: "Pennsylvania", cities: "Philadelphia" },
  { abbrev: "IL", name: "Illinois", cities: "Chicago" },
  { abbrev: "IN", name: "Indiana", cities: "Indianapolis" },
  { abbrev: "ID", name: "Idaho" },
  { abbrev: "OH", name: "Ohio", cities: "Cincinnati" },
  { abbrev: "TX", name: "Texas", cities: "Austin" },
  { abbrev: "ME", name: "Maine", cities: "Bangor" },
  { abbrev: "MO", name: "Missouri", cities: "Kansas City" },
  { abbrev: "NE", name: "Nebraska", cities: "Lincoln" },
  { abbrev: "OR", name: "Oregon", cities: "Portland" },
  { abbrev: "MS", name: "Mississippi" },
  { abbrev: "NM", name: "New Mexico", cities: "White Sands National Park" },
  { abbrev: "UT", name: "Utah", cities: "Kanab" },
  { abbrev: "AZ", name: "Arizona", cities: "Phoenix, Grand Canyon" },
  { abbrev: "WV", name: "West Virginia", cities: "Harpers Ferry" },
];

export const wishlist: string[] = [
  "Iceland",
  "Turkey",
  "Bali",
  "Australia / New Zealand",
  "Prague",
  "Italy",
  "Morocco",
];
