import {
  FaBlog,
  FaBriefcase,
  FaCalculator,
  FaCloudSun,
  FaEnvelope,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaStar,
} from "react-icons/fa";

export const places = [
  {
    title: "Africa",
    href: "/places/africa",
    description:
      "A continent located primarily in the Eastern Hemisphere, known for its diverse cultures, landscapes, and wildlife.",
  },
  {
    title: "Asia",
    href: "/places/asia",
    description:
      "The largest continent, home to numerous countries and diverse cultures, stretching from the Middle East to the Pacific Islands.",
  },
  {
    title: "Australia",
    href: "/places/australia",
    description:
      "A continent and country known for its unique wildlife, stunning landscapes, and vibrant cities.",
  },
  {
    title: "Europe",
    href: "/places/europe",
    description:
      "A continent known for its rich history, diverse cultures, and architectural wonders, spanning from the Atlantic to the Urals.",
  },
  {
    title: "North America",
    href: "/places/north-america",
    description:
      "A continent comprising countries such as the United States, Canada, and Mexico, known for its vast landscapes and cultural diversity.",
  },
  {
    title: "South America",
    href: "/places/south-america",
    description:
      "A continent known for its Amazon rain forest, Andes Mountains, and vibrant Latin American cultures.",
  },
];

export const company = [
  {
    id: 1,
    title: "About us",
    href: "/company/about-us",
    description:
      "Learn more about our company, our mission, and the values that drive us.",
    icon: <FaInfoCircle />,
  },
  {
    id: 2,
    title: "Reviews",
    href: "/company/reviews",
    description:
      "Read reviews and testimonials from our customers and partners.",
    icon: <FaStar />,
  },
  {
    id: 3,
    title: "Blog",
    href: "/company/blog",
    description:
      "Explore articles and insights on various topics related to our industry and expertise.",
    icon: <FaBlog />,
  },
  {
    id: 4,
    title: "Career",
    href: "/company/career",
    description:
      "Discover exciting career opportunities and join our talented team.",
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    title: "FAQ",
    href: "/company/faq",
    description:
      "Find answers to frequently asked questions about our products and services.",
    icon: <FaQuestionCircle />,
  },
  {
    id: 6,
    title: "Contact us",
    href: "/company/contact-us",
    description:
      "Get in touch with our team for inquiries, support, or general questions.",
    icon: <FaEnvelope />,
  },
];

export const utils = [
  {
    id: 1,
    title: "Calculator",
    href: "/utilities/calculator",
    description:
      "A tool for performing mathematical calculations, including basic arithmetic operations and more advanced functions.",
    icon: <FaCalculator />,
  },
  {
    id: 2,
    title: "Converter",
    href: "/utilities/currency-converter",
    description:
      "A utility that allows users to convert between different currencies and view exchange rates.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 3,
    title: "Weather",
    href: "/utilities/weather",
    description:
      "Provides current weather conditions, forecasts, and other meteorological information for specific locations.",
    icon: <FaCloudSun />,
  },
  {
    id: 4,
    title: "Map",
    href: "/utilities/map",
    description:
      "Displays geographical maps and allows users to explore locations, get directions, and view points of interest.",
    icon: <FaMapMarkedAlt />,
  },
];
