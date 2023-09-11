import { Inter } from "next/font/google";

import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import NextTopLoader from "nextjs-toploader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Providers from "../components/Providers/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agency.io: A Billion+ Reviews & Travel Insights",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className + " dark:bg-background"}>
          <NextTopLoader color="#6fcbc6" showSpinner={false} />
          <Providers>
            <Nav />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
