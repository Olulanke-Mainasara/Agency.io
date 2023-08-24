import Blog1 from "@/public/Blog/Blog1.jpeg";
import Blog2 from "@/public/Blog/Blog2.webp";
import Blog3 from "@/public/Blog/Blog3.jpg";
import Blog4 from "@/public/Blog/Blog4.webp";
import Blog5 from "@/public/Blog/Blog5.jpg";
import Australia from "@/public/Destinations/Australia.jpg";
import Brazil from "@/public/Destinations/Brazil.webp";
import Greece from "@/public/Destinations/Greece.jpg";
import Hawaii from "@/public/Destinations/Hawaii.jpg";
import Iceland from "@/public/Destinations/Iceland.jpg";
import Italy from "@/public/Destinations/Italy.jpg";
import Japan from "@/public/Destinations/Japan.webp";
import Mexico from "@/public/Destinations/Mexico.jpg";
import NewZealand from "@/public/Destinations/NewZealand.jpg";
import Spain from "@/public/Destinations/Spain.webp";
import Thailand from "@/public/Destinations/Thailand.webp";
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
import Carousel1 from "../public/Carousel/Carousel1.webp";
import Carousel2 from "../public/Carousel/Carousel2.webp";
import Carousel3 from "../public/Carousel/Carousel3.webp";
import Carousel4 from "../public/Carousel/Carousel4.webp";
import Carousel5 from "../public/Carousel/Carousel5.webp";
import Carousel6 from "../public/Carousel/Carousel6.webp";
import Carousel7 from "../public/Carousel/Carousel7.webp";
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
];

export const experiences = [
  {
    id: 1,
    experience: "food",
    description:
      "Explore local cuisines and indulge in delightful culinary experiences",
    icon: <FaUtensils />,
  },
  {
    id: 2,
    experience: "climbing",
    description: "Challenge yourself and conquer breathtaking heights",
    icon: <FaMountain />,
  },
  {
    id: 3,
    experience: "skydiving",
    description: "Experience the thrill of freefall and soar through the skies",
    icon: <FaPlane />,
  },
  {
    id: 4,
    experience: "cycling",
    description:
      "Pedal your way through scenic routes and discover new destinations",
    icon: <FaBicycle />,
  },
  {
    id: 5,
    experience: "photography",
    description: "Capture unforgettable moments and express your creativity",
    icon: <FaCamera />,
  },
  {
    id: 6,
    experience: "hiking",
    description:
      "Embark on trails and immerse yourself in the beauty of nature",
    icon: <FaHiking />,
  },
  {
    id: 7,
    experience: "shopping",
    description:
      "Indulge in retail therapy and explore vibrant markets and shops",
    icon: <FaShoppingBag />,
  },
  {
    id: 8,
    experience: "theater",
    description:
      "Immerse yourself in captivating performances and artistic expressions",
    icon: <FaTheaterMasks />,
  },
  {
    id: 9,
    experience: "music festivals",
    description:
      "Savor the energy and joy of live music performances and festivals",
    icon: <FaMusic />,
  },
  {
    id: 10,
    experience: "cooking classes",
    description:
      "Learn culinary skills from experts and unleash your inner chef",
    icon: <GiCookingPot />,
  },
  {
    id: 11,
    experience: "caving",
    description:
      "Discover hidden underground wonders and embark on thrilling cave explorations",
    icon: <GiMountainCave />,
  },
  {
    id: 12,
    experience: "camping",
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

export const blogs = [
  {
    id: 1,
    title: "10 Must-Visit Beaches for Your Summer Getaway",
    description:
      "Discover stunning beaches around the world for the perfect summer vacation. From tropical paradises to hidden gems, explore the best destinations for sun, sand, and relaxation.",
    img: Blog1,
  },
  {
    id: 2,
    title: "Unforgettable Adventure: Hiking the Majestic Mountains",
    description:
      "Embark on an epic hiking adventure and conquer the breathtaking mountains. Get ready for thrilling trails, stunning vistas, and an unforgettable journey to the top of the world.",
    img: Blog2,
  },
  {
    id: 3,
    title: "Exploring Exotic Cuisines: A Foodie's Guide",
    description:
      "Indulge your taste buds with a culinary journey across different cultures. From street food delights to fine dining experiences, explore the diverse and mouthwatering world of global cuisine.",
    img: Blog3,
  },
  {
    id: 4,
    title: "Hidden Gems: Off-the-Beaten-Path Destinations",
    description:
      "Escape the crowds and discover hidden gems off the beaten path. Venture to lesser-known destinations that offer unique experiences, untouched natural beauty, and authentic local cultures.",
    img: Blog4,
  },
  {
    id: 5,
    title: "City Escapes: Unveiling Urban Wonders",
    description:
      "Immerse yourself in the vibrant energy of bustling cities. From iconic landmarks to cultural hotspots, dive into the heart of urban life and explore the hidden treasures of cosmopolitan destinations.",
    img: Blog5,
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

export const carouselSections = [
  {
    id: 1,
    mainText: "Indulge in Tranquil Spa Retreats",
    subText: "Revitalize Your Mind, Body, and Soul",
    description:
      "Escape to a world of serenity and relaxation with our rejuvenating spa retreats. Unwind amidst soothing ambiance, skilled therapists, and pampering treatments that will leave you feeling refreshed.",
    imgsrc: Carousel1,
  },
  {
    id: 2,
    mainText: "Set Sail on a Luxury Cruise",
    subText: "Experience Unmatched Comfort and Adventure",
    description:
      "Embark on a journey of a lifetime aboard our exquisite cruise ships. Enjoy luxurious amenities, breathtaking views, and a wide range of activities for an unforgettable vacation.",
    imgsrc: Carousel2,
  },
  {
    id: 3,
    mainText: "Embrace the Thrill of Skydiving",
    subText: "Soar Above the Clouds and Feel Alive",
    description:
      "Experience the ultimate adrenaline rush with our exhilarating skydiving adventures. Dive from high above, feel the rush of wind, and witness awe-inspiring views as you conquer the skies.",
    imgsrc: Carousel3,
  },
  {
    id: 4,
    mainText: "Unwind on Secluded Beaches",
    subText: "Escape to Tranquility Under the Moonlight",
    description:
      "Immerse yourself in the enchanting beauty of our secluded beaches. Take romantic strolls along the shoreline, bask in the gentle ocean breeze, and witness the mesmerizing spectacle of the night sky.",
    imgsrc: Carousel4,
  },
  {
    id: 5,
    mainText: "Conquer Majestic Peaks",
    subText: "Reach New Heights, Unleash Your Adventure",
    description:
      "Embark on a thrilling mountain climbing expedition and conquer majestic peaks. Push your limits, revel in breathtaking vistas, and savor the sense of achievement at the pinnacle of the world.",
    imgsrc: Carousel5,
  },
  {
    id: 6,
    mainText: "Wildlife Expedition",
    subText: "Immerse Yourself in Nature's Wonders",
    description:
      "Explore the extraordinary realm of wildlife through an immersive expedition that transports you to nature's wonders. Witness majestic creatures thriving in their natural habitats, from graceful big cats to and elusive marine life.",
    imgsrc: Carousel6,
  },
  {
    id: 7,
    mainText: "City Escape",
    subText: "Uncover the Pulse of Vibrant Cities",
    description:
      "Indulge in a captivating city escape and immerse yourself in the vibrant energy of bustling metropolises. Wander through historic streets, marvel at iconic landmarks, and discover hidden gems nestled amidst urban landscapes.",
    imgsrc: Carousel7,
  },
];
