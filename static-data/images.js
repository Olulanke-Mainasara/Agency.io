import Blog1 from "@/public/Blog/Blog1.jpeg";
import Blog2 from "@/public/Blog/Blog2.webp";
import Blog3 from "@/public/Blog/Blog3.jpg";
import Blog4 from "@/public/Blog/Blog4.webp";
import Blog5 from "@/public/Blog/Blog5.jpg";
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
import React from "react";
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

import Pic1 from "../public/CTA/Pic1.jpg";
import Pic2 from "../public/CTA/Pic2.jpg";
import Pic3 from "../public/CTA/Pic3.jpg";
import Pic4 from "../public/CTA/Pic4.jpg";
import Image1 from "../public/Carousel/Image1.webp";
import Image2 from "../public/Carousel/Image2.webp";
import Image3 from "../public/Carousel/Image3.webp";
import Image4 from "../public/Carousel/Image4.webp";
import Image5 from "../public/Carousel/Image5.webp";
import Image6 from "../public/Carousel/Image6.webp";
import Image7 from "../public/Carousel/Image7.webp";
import Image8 from "../public/Carousel/Image8.jpg";
import Bora from "../public/Destinations/Bora.webp";
import Machu from "../public/Destinations/Machu.webp";
import Maldives from "../public/Destinations/Maldives.webp";
import Santorini from "../public/Destinations/Santorini.webp";

export const locationsByMonth = [
  {
    id: 1,
    name: "January",
    extra: "Bora Bora, French Polynesia",
    img: Bora,
  },
  { id: 2, name: "February", extra: "Venice, Italy", img: Italy },
  { id: 3, name: "March", extra: "Cancun, Mexico", img: Mexico },
  { id: 4, name: "April", extra: "Kyoto, Japan", img: Japan },
  { id: 5, name: "May", extra: "Barcelona, Spain", img: Spain },
  { id: 6, name: "June", extra: "Santorini, Greece", img: Greece },
  { id: 7, name: "July", extra: "Maui, Hawaii", img: Hawaii },
  {
    id: 8,
    name: "August",
    extra: "Rio de Janeiro, Brazil",
    img: Brazil,
  },
  {
    id: 9,
    name: "September",
    extra: "Machu Picchu, Peru",
    img: Machu,
  },
  {
    id: 10,
    name: "October",
    extra: "Maldives",
    img: Maldives,
  },
  {
    id: 11,
    name: "November",
    extra: "New Zealand",
    img: NewZealand,
  },
  {
    id: 12,
    name: "December",
    extra: "Thailand",
    img: Thailand,
  },
];

export const locationsBySeason = [
  {
    id: 1,
    name: "Spring",
    extra: "Kyoto, Japan",
    img: KyotoSpring,
  },
  {
    id: 2,
    name: "Spring",
    extra: "Amsterdam, Netherlands",
    img: Amsterdam,
  },
  {
    id: 3,
    name: "Summer",
    extra: "Bali, Indonesia",
    img: Bali,
  },
  {
    id: 4,
    name: "Summer",
    extra: "Barcelona, Spain",
    img: Barcelona,
  },
  {
    id: 5,
    name: "Autumn (Fall)",
    extra: "Kyoto, Japan",
    img: KyotoAutumn,
  },
  {
    id: 6,
    name: "Autumn (Fall)",
    extra: "New England, USA",
    img: NewEngland,
  },
  {
    id: 7,
    name: "Winter",
    extra: "Reykjavik, Iceland",
    img: Reykjavik,
  },
  {
    id: 8,
    name: "Winter",
    extra: "Zermatt, Switzerland",
    img: Zermatt,
  },
];

export const staticExperiencesData = [
  {
    _id: 1,
    name: "food",
    slug: "food",
    description:
      "Explore local cuisines and indulge in delightful culinary experiences",
    icon: <FaUtensils />,
  },
  {
    _id: 2,
    name: "climbing",
    slug: "climbing",
    description: "Challenge yourself and conquer breathtaking heights",
    icon: <FaMountain />,
  },
  {
    _id: 3,
    name: "skydiving",
    slug: "skydiving",
    description: "Experience the thrill of freefall and soar through the skies",
    icon: <FaPlane />,
  },
  {
    _id: 4,
    name: "cycling",
    slug: "cycling",
    description:
      "Pedal your way through scenic routes and discover new destinations",
    icon: <FaBicycle />,
  },
  {
    _id: 5,
    name: "photography",
    slug: "photography",
    description: "Capture unforgettable moments and express your creativity",
    icon: <FaCamera />,
  },
  {
    _id: 6,
    name: "hiking",
    slug: "hiking",
    description:
      "Embark on trails and immerse yourself in the beauty of nature",
    icon: <FaHiking />,
  },
  {
    _id: 7,
    name: "shopping",
    slug: "shopping",
    description:
      "Indulge in retail therapy and explore vibrant markets and shops",
    icon: <FaShoppingBag />,
  },
  {
    _id: 8,
    name: "theater",
    slug: "theater",
    description:
      "Immerse yourself in captivating performances and artistic expressions",
    icon: <FaTheaterMasks />,
  },
  {
    _id: 9,
    name: "music festivals",
    slug: "music-festivals",
    description:
      "Savor the energy and joy of live music performances and festivals",
    icon: <FaMusic />,
  },
  {
    _id: 10,
    name: "cooking classes",
    slug: "cooking-classes",
    description:
      "Learn culinary skills from experts and unleash your inner chef",
    icon: <GiCookingPot />,
  },
  {
    _id: 11,
    name: "caving",
    slug: "caving",
    description:
      "Discover hidden underground wonders and embark on thrilling cave explorations",
    icon: <GiMountainCave />,
  },
  {
    _id: 12,
    name: "camping",
    slug: "camping",
    description:
      "Embrace the great outdoors and create unforgettable memories under the stars",
    icon: <GiCampingTent />,
  },
];

export const cities = [
  {
    id: 1,
    name: "Lagos",
    img: Spain,
  },
  {
    id: 2,
    name: "Abuja",
    img: Spain,
  },
  {
    id: 3,
    name: "Calabar",
    img: Spain,
  },
  {
    id: 4,
    name: "Enugu",
    img: Spain,
  },
  {
    id: 5,
    name: "Obudu",
    img: Spain,
  },
  {
    id: 6,
    name: "Kano",
    img: Spain,
  },
  {
    id: 7,
    name: "Ibadan",
    img: Spain,
  },
  {
    id: 8,
    name: "Port Harcourt",
    img: Spain,
  },
];

export const staticBlogData = [
  {
    _id: 1,
    title: "10 Must-Visit Beaches for Your Summer Getaway",
    slug: "10-must-visit-beaches-for-your-summer-getaway",
    description:
      "Discover stunning beaches around the world for the perfect summer vacation. From tropical paradises to hidden gems, explore the best destinations for sun, sand, and relaxation.",
    image: { url: Blog1, alt: "10 Must-Visit Beaches for Your Summer Getaway" },
  },
  {
    _id: 2,
    title: "Unforgettable Adventure: Hiking the Majestic Mountains",
    slug: "unforgettable-adventure-hiking-the-majestic-mountains",
    description:
      "Embark on an epic hiking adventure and conquer the breathtaking mountains. Get ready for thrilling trails, stunning vistas, and an unforgettable journey to the top of the world.",
    image: {
      url: Blog2,
      alt: "Unforgettable Adventure: Hiking the Majestic Mountains",
    },
  },
  {
    _id: 3,
    title: "Exploring Exotic Cuisines: A Foodie's Guide",
    slug: "exploring-exotic-cuisines-a-foodies-guide",
    description:
      "Indulge your taste buds with a culinary journey across different cultures. From street food delights to fine dining experiences, explore the diverse and mouthwatering world of global cuisine.",
    image: { url: Blog3, alt: "Exploring Exotic Cuisines: A Foodie's Guide" },
  },
  {
    _id: 4,
    title: "Hidden Gems: Off-the-Beaten-Path Destinations",
    slug: "hidden-gems-off-the-beaten-path-destinations",
    description:
      "Escape the crowds and discover hidden gems off the beaten path. Venture to lesser-known destinations that offer unique experiences, untouched natural beauty, and authentic local cultures.",
    image: { url: Blog4, alt: "Hidden Gems: Off-the-Beaten-Path Destinations" },
  },
  {
    _id: 5,
    title: "City Escapes: Unveiling Urban Wonders",
    slug: "city-escapes-unveiling-urban-wonders",
    description:
      "Immerse yourself in the vibrant energy of bustling cities. From iconic landmarks to cultural hotspots, dive into the heart of urban life and explore the hidden treasures of cosmopolitan destinations.",
    image: { url: Blog5, alt: "City Escapes: Unveiling Urban Wonders" },
  },
];

export const recommendedDes = [
  {
    id: 1,
    name: "Italy",
    img: Italy,
  },
  {
    id: 2,
    name: "Japan",
    img: Japan,
  },
  {
    id: 3,
    name: "Greece",
    img: Greece,
  },
  {
    id: 4,
    name: "New Zealand",
    img: NewZealand,
  },
  {
    id: 5,
    name: "Thailand",
    img: Thailand,
  },
  {
    id: 6,
    name: "Iceland",
    img: Iceland,
  },
  {
    id: 7,
    name: "Australia",
    img: Australia,
  },
  {
    id: 8,
    name: "Spain",
    img: Spain,
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
