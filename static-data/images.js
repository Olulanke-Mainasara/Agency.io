import React from "react";
import Amsterdam from "@/public/Destinations/Amsterdam.jpg";
import Australia from "@/public/Destinations/Australia.jpg";
import Bali from "@/public/Destinations/Bali.jpg";
import Barcelona from "@/public/Destinations/Barcelona.jpg";
import Brazil from "@/public/Destinations/Brazil.webp";
import Greece from "@/public/Destinations/Greece.jpg";
import Hawaii from "@/public/Destinations/Hawaii.jpg";
import Iceland from "@/public/Destinations/Iceland.jpg";
import Italy from "@/public/Destinations/Italy.jpg";
import Japan from "@/public/Destinations/Japan.webp";
import KyotoAutumn from "@/public/Destinations/KyotoAutumn.jpg";
import KyotoSpring from "@/public/Destinations/KyotoSpring.jpg";
import Mexico from "@/public/Destinations/Mexico.jpg";
import NewEngland from "@/public/Destinations/NewEngland.jpg";
import NewZealand from "@/public/Destinations/NewZealand.jpg";
import Reykjavik from "@/public/Destinations/Reykjavik.jpg";
import Spain from "@/public/Destinations/Spain.webp";
import Thailand from "@/public/Destinations/Thailand.webp";
import Zermatt from "@/public/Destinations/Zermatt.webp";
import Cabin from "@/public/Properties/Cabin.jpg";
import Castle from "@/public/Properties/Castle.jpg";
import Cottage from "@/public/Properties/Cottage.jpg";
import Lodge from "@/public/Properties/Lodge.jpg";
import Villa from "@/public/Properties/Villa.jpg";
import {
  FaBicycle,
  FaCamera,
  FaHiking,
  FaMountain,
  FaMusic,
  FaPlane,
  FaShoppingBag,
  FaTheaterMasks,
  FaUtensils,
} from "react-icons/fa";
import { GiCampingTent, GiCookingPot, GiMountainCave } from "react-icons/gi";

import Image1 from "../public/Carousel/Image1.webp";
import Image2 from "../public/Carousel/Image2.webp";
import Image3 from "../public/Carousel/Image3.webp";
import Image4 from "../public/Carousel/Image4.webp";
import Image5 from "../public/Carousel/Image5.webp";
import Image6 from "../public/Carousel/Image6.webp";
import Image7 from "../public/Carousel/Image7.webp";
import Image8 from "../public/Carousel/Image8.jpg";
import Pic1 from "../public/CTA/Pic1.jpg";
import Pic2 from "../public/CTA/Pic2.jpg";
import Pic3 from "../public/CTA/Pic3.jpg";
import Pic4 from "../public/CTA/Pic4.jpg";
import Bora from "../public/Destinations/Bora.webp";
import Machu from "../public/Destinations/Machu.webp";
import Maldives from "../public/Destinations/Maldives.webp";
import Santorini from "../public/Destinations/Santorini.webp";

export const locationsByMonth = [
  {
    _id: 1,
    name: "January",
    slug: "bora-bora",
    extra: "Bora Bora, French Polynesia",
    displayImage: { url: Bora, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 2,
    name: "February",
    slug: "venice",
    extra: "Venice, Italy",
    displayImage: { url: Italy, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 3,
    name: "March",
    slug: "cancun",
    extra: "Cancun, Mexico",
    displayImage: { url: Mexico, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 4,
    name: "April",
    slug: "kyoto",
    extra: "Kyoto, Japan",
    displayImage: { url: Japan, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 5,
    name: "May",
    slug: "barcelona",
    extra: "Barcelona, Spain",
    displayImage: { url: Spain, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 6,
    name: "June",
    slug: "santorini",
    extra: "Santorini, Greece",
    displayImage: { url: Greece, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 7,
    name: "July",
    slug: "maui",
    extra: "Maui, Hawaii",
    displayImage: { url: Hawaii, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 8,
    name: "August",
    slug: "rio-de-janeiro",
    extra: "Rio de Janeiro, Brazil",
    displayImage: { url: Brazil, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 9,
    name: "September",
    slug: "machu-picchu",
    extra: "Machu Picchu, Peru",
    displayImage: { url: Machu, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 10,
    name: "October",
    slug: "maldives",
    extra: "Maldives",
    displayImage: { url: Maldives, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 11,
    name: "November",
    slug: "new-zealand",
    extra: "New Zealand",
    displayImage: { url: NewZealand, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 12,
    name: "December",
    slug: "thailand",
    extra: "Thailand",
    displayImage: { url: Thailand, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
];

export const locationsBySeason = [
  {
    _id: 1,
    name: "Spring",
    slug: "kyoto",
    extra: "Kyoto, Japan",
    displayImage: { url: KyotoSpring, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 2,
    name: "Spring",
    slug: "amsterdam",
    extra: "Amsterdam, Netherlands",
    displayImage: { url: Amsterdam, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 3,
    name: "Summer",
    slug: "bali",
    extra: "Bali, Indonesia",
    displayImage: { url: Bali, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 4,
    name: "Summer",
    slug: "barcelona",
    extra: "Barcelona, Spain",
    displayImage: { url: Barcelona, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 5,
    name: "Autumn (Fall)",
    slug: "kyoto",
    extra: "Kyoto, Japan",
    displayImage: { url: KyotoAutumn, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 6,
    name: "Autumn (Fall)",
    slug: "new-england",
    extra: "New England, USA",
    displayImage: { url: NewEngland, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 7,
    name: "Winter",
    slug: "reykjavik",
    extra: "Reykjavik, Iceland",
    displayImage: { url: Reykjavik, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 8,
    name: "Winter",
    slug: "zermatt",
    extra: "Zermatt, Switzerland",
    displayImage: { url: Zermatt, alt: "" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
];

export const staticExperiencesData = [
  {
    _id: 1,
    name: "food",
    description:
      "Explore local cuisines and indulge in delightful culinary experiences",
    icon: <FaUtensils />,
  },
  {
    _id: 2,
    name: "climbing",
    description: "Challenge yourself and conquer breathtaking heights",
    icon: <FaMountain />,
  },
  {
    _id: 3,
    name: "skydiving",
    description: "Experience the thrill of freefall and soar through the skies",
    icon: <FaPlane />,
  },
  {
    _id: 4,
    name: "cycling",
    description:
      "Pedal your way through scenic routes and discover new destinations",
    icon: <FaBicycle />,
  },
  {
    _id: 5,
    name: "photography",
    description: "Capture unforgettable moments and express your creativity",
    icon: <FaCamera />,
  },
  {
    _id: 6,
    name: "hiking",
    description:
      "Embark on trails and immerse yourself in the beauty of nature",
    icon: <FaHiking />,
  },
  {
    _id: 7,
    name: "shopping",
    description:
      "Indulge in retail therapy and explore vibrant markets and shops",
    icon: <FaShoppingBag />,
  },
  {
    _id: 8,
    name: "theater",
    description:
      "Immerse yourself in captivating performances and artistic expressions",
    icon: <FaTheaterMasks />,
  },
  {
    _id: 9,
    name: "music-fest",
    description:
      "Savor the energy and joy of live music performances and festivals",
    icon: <FaMusic />,
  },
  {
    _id: 10,
    name: "cooking",
    description:
      "Learn culinary skills from experts and unleash your inner chef",
    icon: <GiCookingPot />,
  },
  {
    _id: 11,
    name: "caving",
    description:
      "Discover hidden underground wonders and embark on thrilling cave explorations",
    icon: <GiMountainCave />,
  },
  {
    _id: 12,
    name: "camping",
    description:
      "Embrace the great outdoors and create unforgettable memories under the stars",
    icon: <GiCampingTent />,
  },
];

export const cities = [
  {
    _id: 1,
    name: "Lagos",
    slug: "lagos",
    displayImage: { url: Spain, alt: "Lagos" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 2,
    name: "Abuja",
    slug: "abuja",
    displayImage: { url: Spain, alt: "Abuja" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 3,
    name: "Calabar",
    slug: "calabar",
    displayImage: { url: Spain, alt: "Calabar" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 4,
    name: "Enugu",
    slug: "enugu",
    displayImage: { url: Spain, alt: "Enugu" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 5,
    name: "Obudu",
    slug: "obudu",
    displayImage: { url: Spain, alt: "Obudu" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 6,
    name: "Kano",
    slug: "kano",
    displayImage: { url: Spain, alt: "Kano" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 7,
    name: "Ibadan",
    slug: "ibadan",
    displayImage: { url: Spain, alt: "Ibadan" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 8,
    name: "Port Harcourt",
    slug: "port-harcourt",
    displayImage: { url: Spain, alt: "Port Harcourt" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
];

export const recommendedDes = [
  {
    _id: 1,
    name: "Italy",
    slug: "italy",
    displayImage: { url: Italy, alt: "Italy" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 2,
    name: "Japan",
    slug: "japan",
    displayImage: { url: Japan, alt: "Japan" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 3,
    name: "Greece",
    slug: "greece",
    displayImage: { url: Greece, alt: "Greece" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 4,
    name: "New Zealand",
    slug: "new-zealand",
    displayImage: { url: NewZealand, alt: "New Zealand" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 5,
    name: "Thailand",
    slug: "thailand",
    displayImage: { url: Thailand, alt: "Thailand" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 6,
    name: "Iceland",
    slug: "iceland",
    displayImage: { url: Iceland, alt: "Iceland" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 7,
    name: "Australia",
    slug: "australia",
    displayImage: { url: Australia, alt: "Australia" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
  {
    _id: 8,
    name: "Spain",
    slug: "spain",
    displayImage: { url: Spain, alt: "Spain" },
    country: "",
    description: "",
    popularSpots: [],
    pictures: [],
    essentials: [],
    posts: [],
    whyWeLove: [],
    coordinates: {
      altitude: 0,
      latitude: 0,
      longitude: 0,
    },
    faqs: [],
  },
];

export const destinations = [
  {
    id: 1,
    destination: "Maldives",
    note: "Experience paradise on Earth with pristine white sandy beaches, crystal-clear turquoise waters, and luxurious over-water bungalows.",
    imgsrc: Maldives,
  },
  {
    id: 2,
    destination: "Santorini",
    note: "Indulge in the charm of this Greek island paradise known for its stunning sunsets, whitewashed buildings, and breathtaking views over the Aegean Sea.",
    imgsrc: Santorini,
  },
  {
    id: 3,
    destination: "Machu Picchu",
    note: "Embark on a journey to the ancient ruins of the Incas, hidden amidst the Andes mountains, and marvel at the awe-inspiring beauty and rich history.",
    imgsrc: Machu,
  },
  {
    id: 4,
    destination: "Bora Bora",
    note: "Immerse yourself in the allure of this French Polynesian gem, where turquoise lagoons, vibrant coral reefs, and luxurious over-water bungalows await.",
    imgsrc: Bora,
  },
];

export const images = [
  {
    id: 1,
    imgsrc: Pic1,
  },
  {
    id: 2,
    imgsrc: Pic2,
  },
  {
    id: 3,
    imgsrc: Pic3,
  },
  {
    id: 4,
    imgsrc: Pic4,
  },
];

export const vacationCarousel = [
  {
    id: 1,
    mainText: "Indulge in Tranquil Spa Retreats",
    subText: "Revitalize Your Mind, Body, and Soul",
    description:
      "Escape to a world of serenity and relaxation with our rejuvenating spa retreats. Unwind amidst soothing ambiance, skilled therapists, and pampering treatments that will leave you feeling refreshed.",
    imgsrc: Image1,
  },
  {
    id: 2,
    mainText: "Set Sail on a Luxury Cruise",
    subText: "Experience Unmatched Comfort and Adventure",
    description:
      "Embark on a journey of a lifetime aboard our exquisite cruise ships. Enjoy luxurious amenities, breathtaking views, and a wide range of activities for an unforgettable vacation.",
    imgsrc: Image2,
  },
  {
    id: 3,
    mainText: "Embrace the Thrill of Skydiving",
    subText: "Soar Above the Clouds and Feel Alive",
    description:
      "Experience the ultimate adrenaline rush with our exhilarating skydiving adventures. Dive from high above, feel the rush of wind, and witness awe-inspiring views as you conquer the skies.",
    imgsrc: Image3,
  },
  {
    id: 4,
    mainText: "Unwind on Secluded Beaches",
    subText: "Escape to Tranquility Under the Moonlight",
    description:
      "Immerse yourself in the enchanting beauty of our secluded beaches. Take romantic strolls along the shoreline, bask in the gentle ocean breeze, and witness the mesmerizing spectacle of the night sky.",
    imgsrc: Image4,
  },
  {
    id: 5,
    mainText: "Conquer Majestic Peaks",
    subText: "Reach New Heights, Unleash Your Adventure",
    description:
      "Embark on a thrilling mountain climbing expedition and conquer majestic peaks. Push your limits, revel in breathtaking vistas, and savor the sense of achievement at the pinnacle of the world.",
    imgsrc: Image5,
  },
  {
    id: 6,
    mainText: "Wildlife Expedition",
    subText: "Immerse Yourself in Nature's Wonders",
    description:
      "Explore the extraordinary realm of wildlife through an immersive expedition that transports you to nature's wonders. Witness majestic creatures thriving in their natural habitats, from graceful big cats to and elusive marine life.",
    imgsrc: Image6,
  },
  {
    id: 7,
    mainText: "City Escape",
    subText: "Uncover the Pulse of Vibrant Cities",
    description:
      "Indulge in a captivating city escape and immerse yourself in the vibrant energy of bustling metropolises. Wander through historic streets, marvel at iconic landmarks, and discover hidden gems nestled amidst urban landscapes.",
    imgsrc: Image7,
  },
  {
    id: 8,
    mainText: "Fine Dining Extravaganza",
    subText: "Savor Culinary Excellence",
    description:
      "Elevate your taste buds with an exquisite fine dining experience. Delight in a gourmet journey of flavors, artfully crafted dishes, and impeccable service that will leave you with unforgettable culinary memories.",
    imgsrc: Image8,
  },
];

export const propertyCarousel = [
  {
    id: 1,
    mainText: "Seaside Cottage Retreat",
    subText: "France, Normandy",
    description:
      "Discover the charm of Normandy in this seaside cottage retreat. Wake up to the sound of waves, explore picturesque coastal towns, and savor fresh seafood. The perfect escape for beach lovers.",
    imgsrc: Cottage,
  },
  {
    id: 2,
    mainText: "Luxury Oasis Villa",
    subText: "Germany, Neuruppin",
    description:
      "Escape to this exclusive oasis in Neuruppin, Germany. Experience serenity and relaxation in a luxurious villa surrounded by beautiful landscapes. Unwind in a private spa, enjoy gourmet dining, and create unforgettable memories.",
    imgsrc: Villa,
  },
  {
    id: 3,
    mainText: "Mountain View Cabin",
    subText: "Canada, Banff",
    description:
      "Embrace nature in a cozy mountain view cabin in Banff, Canada. Hike through breathtaking trails, stargaze from your private deck, and experience the beauty of the Canadian Rockies.",
    imgsrc: Cabin,
  },
  {
    id: 4,
    mainText: "Riverside Lodge",
    subText: "USA, Montana",
    description:
      "Unwind in a rustic yet elegant riverside lodge in Montana, USA. Fly fish in pristine waters, go horseback riding through scenic landscapes, and enjoy evenings by the campfire.",
    imgsrc: Lodge,
  },
  {
    id: 5,
    mainText: "Historic Castle Stay",
    subText: "Scotland, Edinburgh",
    description:
      "Step back in time with a stay in a historic castle in Edinburgh, Scotland. Explore ancient corridors, enjoy traditional Scottish feasts, and experience the grandeur of a bygone era.",
    imgsrc: Castle,
  },
];

export const execs = [
  {
    id: 1,
    name: "Olulanke Mainasara",
    position: "Co-Founder",
    image: {
      url: "",
      alt: "",
    },
  },
  {
    id: 2,
    name: "Olulanke Oluwatomiwa",
    position: "Co-Founder",
    image: {
      url: "",
      alt: "",
    },
  },
  {
    id: 3,
    name: "Olulanke Folashade",
    position: "C.F.O",
    image: {
      url: "",
      alt: "",
    },
  },
  {
    id: 4,
    name: "Olulanke Isaac",
    position: "C.T.O",
    image: {
      url: "",
      alt: "",
    },
  },
  {
    id: 5,
    name: "Olulanke Ebunoluwa",
    position: "G.C",
    image: {
      url: "",
      alt: "",
    },
  },
];
