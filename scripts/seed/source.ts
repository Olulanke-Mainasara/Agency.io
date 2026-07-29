import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { destinations } from "./destinations";
import { fetchNearbyEstablishments } from "./lib/overpass";
import { fetchUnsplashPhoto } from "./lib/unsplash";
import { fetchWikipediaSummary } from "./lib/wikipedia";

const OUTPUT_DIR = path.join(__dirname, "..", "..", "sanity", "seed", "data");
const DELAY_BETWEEN_DESTINATIONS_MS = 1500;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sourceDestination(destination: (typeof destinations)[number]) {
  const [city, country] = await Promise.all([
    fetchWikipediaSummary(destination.cityWikiTitle),
    fetchWikipediaSummary(destination.countryWikiTitle),
  ]);

  const [cityPhoto, establishments] = await Promise.all([
    fetchUnsplashPhoto(`${destination.cityWikiTitle} cityscape`),
    city.coordinates
      ? fetchNearbyEstablishments(city.coordinates.lat, city.coordinates.lon)
      : Promise.resolve([]),
  ]);

  const establishmentsWithPhotos = [];
  for (const establishment of establishments) {
    const imageUrl = await fetchUnsplashPhoto(
      `${establishment.name} ${destination.cityWikiTitle}`
    );

    establishmentsWithPhotos.push({
      name: establishment.name,
      slug: slugify(establishment.name),
      category: establishment.category,
      continent: destination.continent,
      country: country.title,
      place: city.title,
      coordinates: establishment.coordinates,
      address: establishment.address,
      contact: {
        website: establishment.website,
        telephone: establishment.phone,
        email: null,
      },
      imageUrl,
    });
  }

  return {
    country: {
      name: country.title,
      slug: destination.countrySlug,
      continent: destination.continent,
      description: country.description,
      imageUrl: country.imageUrl,
      coordinates: country.coordinates,
    },
    place: {
      name: city.title,
      slug: destination.citySlug,
      country: country.title,
      description: city.description,
      imageUrl: cityPhoto ?? city.imageUrl,
      coordinates: city.coordinates,
    },
    establishments: establishmentsWithPhotos,
  };
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const destination of destinations) {
    process.stdout.write(`Sourcing ${destination.cityWikiTitle}... `);

    try {
      const data = await sourceDestination(destination);
      const outputPath = path.join(OUTPUT_DIR, `${destination.citySlug}.json`);
      await writeFile(outputPath, JSON.stringify(data, null, 2));
      console.log(`done (${data.establishments.length} establishments).`);
    } catch (error) {
      console.log("failed.");
      console.error(error);
    }

    await sleep(DELAY_BETWEEN_DESTINATIONS_MS);
  }
}

main();
