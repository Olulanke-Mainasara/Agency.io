export type Continent =
  | "Africa"
  | "Asia"
  | "Australia"
  | "Europe"
  | "North America"
  | "South America";

export type DestinationConfig = {
  citySlug: string;
  cityWikiTitle: string;
  countrySlug: string;
  countryWikiTitle: string;
  continent: Continent;
};

// The 10 flagship destinations picked in plan/roadmap.md step 7.
export const destinations: DestinationConfig[] = [
  {
    citySlug: "bangkok",
    cityWikiTitle: "Bangkok",
    countrySlug: "thailand",
    countryWikiTitle: "Thailand",
    continent: "Asia",
  },
  {
    // Modeled as its own "country" doc rather than nested under China —
    // Hong Kong has its own currency/immigration and travel content
    // universally treats it as a distinct destination.
    citySlug: "hong-kong",
    cityWikiTitle: "Hong Kong",
    countrySlug: "hong-kong",
    countryWikiTitle: "Hong Kong",
    continent: "Asia",
  },
  {
    citySlug: "dubai",
    cityWikiTitle: "Dubai",
    countrySlug: "united-arab-emirates",
    countryWikiTitle: "United Arab Emirates",
    continent: "Asia",
  },
  {
    citySlug: "london",
    cityWikiTitle: "London",
    countrySlug: "united-kingdom",
    countryWikiTitle: "United Kingdom",
    continent: "Europe",
  },
  {
    citySlug: "istanbul",
    cityWikiTitle: "Istanbul",
    countrySlug: "turkey",
    countryWikiTitle: "Turkey",
    continent: "Europe",
  },
  {
    citySlug: "paris",
    cityWikiTitle: "Paris",
    countrySlug: "france",
    countryWikiTitle: "France",
    continent: "Europe",
  },
  {
    citySlug: "marrakesh",
    cityWikiTitle: "Marrakesh",
    countrySlug: "morocco",
    countryWikiTitle: "Morocco",
    continent: "Africa",
  },
  {
    citySlug: "new-york-city",
    cityWikiTitle: "New York City",
    countrySlug: "united-states",
    countryWikiTitle: "United States",
    continent: "North America",
  },
  {
    citySlug: "sydney",
    cityWikiTitle: "Sydney",
    countrySlug: "australia",
    countryWikiTitle: "Australia",
    continent: "Australia",
  },
  {
    citySlug: "rio-de-janeiro",
    cityWikiTitle: "Rio de Janeiro",
    countrySlug: "brazil",
    countryWikiTitle: "Brazil",
    continent: "South America",
  },
];

// Every other destination slug the homepage's static showcase sections
// (static-data/destinations.ts: locationsByMonth, locationsBySeason,
// recommendedDes, destinations) link to but that isn't one of the 10
// flagship picks above — without these, every one of those cards 404s,
// since there's no matching Sanity `place` document for them. A few of
// these (italy, japan, greece, iceland, australia, spain, thailand) are
// really country names used as "city" card labels in that static data;
// sourced from the country's own Wikipedia article for both the country
// and place doc rather than picking a representative city on their
// behalf.
export const additionalHomepageDestinations: DestinationConfig[] = [
  {
    citySlug: "bora-bora",
    cityWikiTitle: "Bora Bora",
    countrySlug: "french-polynesia",
    countryWikiTitle: "French Polynesia",
    continent: "Australia",
  },
  {
    citySlug: "venice",
    cityWikiTitle: "Venice",
    countrySlug: "italy",
    countryWikiTitle: "Italy",
    continent: "Europe",
  },
  {
    citySlug: "cancun",
    cityWikiTitle: "Cancún",
    countrySlug: "mexico",
    countryWikiTitle: "Mexico",
    continent: "North America",
  },
  {
    citySlug: "kyoto",
    cityWikiTitle: "Kyoto",
    countrySlug: "japan",
    countryWikiTitle: "Japan",
    continent: "Asia",
  },
  {
    citySlug: "barcelona",
    cityWikiTitle: "Barcelona",
    countrySlug: "spain",
    countryWikiTitle: "Spain",
    continent: "Europe",
  },
  {
    citySlug: "santorini",
    cityWikiTitle: "Santorini",
    countrySlug: "greece",
    countryWikiTitle: "Greece",
    continent: "Europe",
  },
  {
    citySlug: "maui",
    cityWikiTitle: "Maui",
    countrySlug: "united-states",
    countryWikiTitle: "United States",
    continent: "North America",
  },
  {
    citySlug: "machu-picchu",
    cityWikiTitle: "Machu Picchu",
    countrySlug: "peru",
    countryWikiTitle: "Peru",
    continent: "South America",
  },
  {
    // Self-referential: no single city stands in for "the Maldives" in
    // the static data, so both the country and place docs are sourced
    // from the same "Maldives" article.
    citySlug: "maldives",
    cityWikiTitle: "Maldives",
    countrySlug: "maldives",
    countryWikiTitle: "Maldives",
    continent: "Asia",
  },
  {
    citySlug: "new-zealand",
    cityWikiTitle: "New Zealand",
    countrySlug: "new-zealand",
    countryWikiTitle: "New Zealand",
    continent: "Australia",
  },
  {
    citySlug: "thailand",
    cityWikiTitle: "Thailand",
    countrySlug: "thailand",
    countryWikiTitle: "Thailand",
    continent: "Asia",
  },
  {
    citySlug: "amsterdam",
    cityWikiTitle: "Amsterdam",
    countrySlug: "netherlands",
    countryWikiTitle: "Netherlands",
    continent: "Europe",
  },
  {
    citySlug: "bali",
    cityWikiTitle: "Bali",
    countrySlug: "indonesia",
    countryWikiTitle: "Indonesia",
    continent: "Asia",
  },
  {
    citySlug: "new-england",
    cityWikiTitle: "New England",
    countrySlug: "united-states",
    countryWikiTitle: "United States",
    continent: "North America",
  },
  {
    citySlug: "reykjavik",
    cityWikiTitle: "Reykjavík",
    countrySlug: "iceland",
    countryWikiTitle: "Iceland",
    continent: "Europe",
  },
  {
    citySlug: "zermatt",
    cityWikiTitle: "Zermatt",
    countrySlug: "switzerland",
    countryWikiTitle: "Switzerland",
    continent: "Europe",
  },
  {
    citySlug: "italy",
    cityWikiTitle: "Italy",
    countrySlug: "italy",
    countryWikiTitle: "Italy",
    continent: "Europe",
  },
  {
    citySlug: "japan",
    cityWikiTitle: "Japan",
    countrySlug: "japan",
    countryWikiTitle: "Japan",
    continent: "Asia",
  },
  {
    citySlug: "greece",
    cityWikiTitle: "Greece",
    countrySlug: "greece",
    countryWikiTitle: "Greece",
    continent: "Europe",
  },
  {
    citySlug: "iceland",
    cityWikiTitle: "Iceland",
    countrySlug: "iceland",
    countryWikiTitle: "Iceland",
    continent: "Europe",
  },
  {
    citySlug: "australia",
    cityWikiTitle: "Australia",
    countrySlug: "australia",
    countryWikiTitle: "Australia",
    continent: "Australia",
  },
  {
    citySlug: "spain",
    cityWikiTitle: "Spain",
    countrySlug: "spain",
    countryWikiTitle: "Spain",
    continent: "Europe",
  },
];
