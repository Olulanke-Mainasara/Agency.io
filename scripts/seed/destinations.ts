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
