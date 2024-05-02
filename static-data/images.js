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

import VacationImg1 from "../public/Carousel/Image1.webp";
import VacationImg2 from "../public/Carousel/Image2.webp";
import VacationImg3 from "../public/Carousel/Image3.webp";
import VacationImg4 from "../public/Carousel/Image4.webp";
import VacationImg5 from "../public/Carousel/Image5.webp";
import VacationImg6 from "../public/Carousel/Image6.webp";
import VacationImg7 from "../public/Carousel/Image7.webp";
import VacationImg8 from "../public/Carousel/Image8.jpg";
import CTAPic1 from "../public/CTA/Pic1.jpg";
import CTAPic2 from "../public/CTA/Pic2.jpg";
import CTAPic3 from "../public/CTA/Pic3.jpg";
import CTAPic4 from "../public/CTA/Pic4.jpg";
import ExecImg from "../public/Hero/exec.jpg";
import PropertyImg3 from "../public/Properties/Cabin.jpg";
import PropertyImg5 from "../public/Properties/Castle.jpg";
import PropertyImg1 from "../public/Properties/Cottage.jpg";
import PropertyImg4 from "../public/Properties/Lodge.jpg";
import PropertyImg2 from "../public/Properties/Villa.jpg";

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

export const images = [
  {
    id: 1,
    imgsrc: CTAPic1,
  },
  {
    id: 2,
    imgsrc: CTAPic2,
  },
  {
    id: 3,
    imgsrc: CTAPic3,
  },
  {
    id: 4,
    imgsrc: CTAPic4,
  },
];

export const vacationCarousel = [
  {
    id: 1,
    mainText: "Indulge in Tranquil Spa Retreats",
    subText: "Revitalize Your Mind, Body, and Soul",
    description:
      "Escape to a world of serenity and relaxation with our rejuvenating spa retreats. Unwind amidst soothing ambiance, skilled therapists, and pampering treatments that will leave you feeling refreshed.",
    imgsrc: VacationImg1,
  },
  {
    id: 2,
    mainText: "Set Sail on a Luxury Cruise",
    subText: "Experience Unmatched Comfort and Adventure",
    description:
      "Embark on a journey of a lifetime aboard our exquisite cruise ships. Enjoy luxurious amenities, breathtaking views, and a wide range of activities for an unforgettable vacation.",
    imgsrc: VacationImg2,
  },
  {
    id: 3,
    mainText: "Embrace the Thrill of Skydiving",
    subText: "Soar Above the Clouds and Feel Alive",
    description:
      "Experience the ultimate adrenaline rush with our exhilarating skydiving adventures. Dive from high above, feel the rush of wind, and witness awe-inspiring views as you conquer the skies.",
    imgsrc: VacationImg3,
  },
  {
    id: 4,
    mainText: "Unwind on Secluded Beaches",
    subText: "Escape to Tranquility Under the Moonlight",
    description:
      "Immerse yourself in the enchanting beauty of our secluded beaches. Take romantic strolls along the shoreline, bask in the gentle ocean breeze, and witness the mesmerizing spectacle of the night sky.",
    imgsrc: VacationImg4,
  },
  {
    id: 5,
    mainText: "Conquer Majestic Peaks",
    subText: "Reach New Heights, Unleash Your Adventure",
    description:
      "Embark on a thrilling mountain climbing expedition and conquer majestic peaks. Push your limits, revel in breathtaking vistas, and savor the sense of achievement at the pinnacle of the world.",
    imgsrc: VacationImg5,
  },
  {
    id: 6,
    mainText: "Wildlife Expedition",
    subText: "Immerse Yourself in Nature's Wonders",
    description:
      "Explore the extraordinary realm of wildlife through an immersive expedition that transports you to nature's wonders. Witness majestic creatures thriving in their natural habitats, from graceful big cats to and elusive marine life.",
    imgsrc: VacationImg6,
  },
  {
    id: 7,
    mainText: "City Escape",
    subText: "Uncover the Pulse of Vibrant Cities",
    description:
      "Indulge in a captivating city escape and immerse yourself in the vibrant energy of bustling metropolises. Wander through historic streets, marvel at iconic landmarks, and discover hidden gems nestled amidst urban landscapes.",
    imgsrc: VacationImg7,
  },
  {
    id: 8,
    mainText: "Fine Dining Extravaganza",
    subText: "Savor Culinary Excellence",
    description:
      "Elevate your taste buds with an exquisite fine dining experience. Delight in a gourmet journey of flavors, artfully crafted dishes, and impeccable service that will leave you with unforgettable culinary memories.",
    imgsrc: VacationImg8,
  },
];

export const propertyCarousel = [
  {
    id: 1,
    mainText: "Seaside Cottage Retreat",
    subText: "France, Normandy",
    description:
      "Discover the charm of Normandy in this seaside cottage retreat. Wake up to the sound of waves, explore picturesque coastal towns, and savor fresh seafood. The perfect escape for beach lovers.",
    imgsrc: PropertyImg1,
  },
  {
    id: 2,
    mainText: "Luxury Oasis Villa",
    subText: "Germany, Neuruppin",
    description:
      "Escape to this exclusive oasis in Neuruppin, Germany. Experience serenity and relaxation in a luxurious villa surrounded by beautiful landscapes. Unwind in a private spa, enjoy gourmet dining, and create unforgettable memories.",
    imgsrc: PropertyImg2,
  },
  {
    id: 3,
    mainText: "Mountain View Cabin",
    subText: "Canada, Banff",
    description:
      "Embrace nature in a cozy mountain view cabin in Banff, Canada. Hike through breathtaking trails, stargaze from your private deck, and experience the beauty of the Canadian Rockies.",
    imgsrc: PropertyImg3,
  },
  {
    id: 4,
    mainText: "Riverside Lodge",
    subText: "USA, Montana",
    description:
      "Unwind in a rustic yet elegant riverside lodge in Montana, USA. Fly fish in pristine waters, go horseback riding through scenic landscapes, and enjoy evenings by the campfire.",
    imgsrc: PropertyImg4,
  },
  {
    id: 5,
    mainText: "Historic Castle Stay",
    subText: "Scotland, Edinburgh",
    description:
      "Step back in time with a stay in a historic castle in Edinburgh, Scotland. Explore ancient corridors, enjoy traditional Scottish feasts, and experience the grandeur of a bygone era.",
    imgsrc: PropertyImg5,
  },
];

export const execs = [
  {
    id: 1,
    name: "Olulanke Mainasara",
    position: "Co-Founder",
    image: ExecImg,
  },
  {
    id: 2,
    name: "Olulanke Tomiwa",
    position: "Co-Founder",
    image: ExecImg,
  },
  {
    id: 3,
    name: "Olulanke Folashade",
    position: "C.F.O",
    image: ExecImg,
  },
  {
    id: 4,
    name: "Olulanke Isaac",
    position: "C.T.O",
    image: ExecImg,
  },
  {
    id: 5,
    name: "Olulanke Ebunoluwa",
    position: "G.C",
    image: ExecImg,
  },
];
