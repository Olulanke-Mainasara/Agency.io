import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

export const metadata = {
  title: "Services | Agency.io",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
