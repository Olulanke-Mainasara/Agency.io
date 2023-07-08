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

export const locations = [
  { id: 1, month: "January", destination: "Bora Bora, French Polynesia" },
  { id: 2, month: "February", destination: "Venice, Italy" },
  { id: 3, month: "March", destination: "Cancun, Mexico" },
  { id: 4, month: "April", destination: "Kyoto, Japan" },
  { id: 5, month: "May", destination: "Barcelona, Spain" },
  { id: 6, month: "June", destination: "Santorini, Greece" },
  { id: 7, month: "July", destination: "Maui, Hawaii" },
  { id: 8, month: "August", destination: "Rio de Janeiro, Brazil" },
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
  },
  {
    id: 2,
    name: "Abuja",
  },
  {
    id: 3,
    name: "Calabar",
  },
  {
    id: 4,
    name: "Enugu",
  },
  {
    id: 5,
    name: "Obudu",
  },
  {
    id: 6,
    name: "Kano",
  },
  {
    id: 7,
    name: "Ibadan",
  },
  {
    id: 8,
    name: "Port Harcourt",
  },
];

export const blogs = [
  {
    id: 1,
    title: "10 Must-Visit Beaches for Your Summer Getaway",
    description:
      "Discover stunning beaches around the world for the perfect summer vacation. From tropical paradises to hidden gems, explore the best destinations for sun, sand, and relaxation.",
  },
  {
    id: 2,
    title: "Unforgettable Adventure: Hiking the Majestic Mountains",
    description:
      "Embark on an epic hiking adventure and conquer the breathtaking mountains. Get ready for thrilling trails, stunning vistas, and an unforgettable journey to the top of the world.",
  },
  {
    id: 3,
    title: "Exploring Exotic Cuisines: A Foodie's Guide",
    description:
      "Indulge your taste buds with a culinary journey across different cultures. From street food delights to fine dining experiences, explore the diverse and mouthwatering world of global cuisine.",
  },
  {
    id: 4,
    title: "Hidden Gems: Off-the-Beaten-Path Destinations",
    description:
      "Escape the crowds and discover hidden gems off the beaten path. Venture to lesser-known destinations that offer unique experiences, untouched natural beauty, and authentic local cultures.",
  },
  {
    id: 5,
    title: "City Escapes: Unveiling Urban Wonders",
    description:
      "Immerse yourself in the vibrant energy of bustling cities. From iconic landmarks to cultural hotspots, dive into the heart of urban life and explore the hidden treasures of cosmopolitan destinations.",
  },
];
