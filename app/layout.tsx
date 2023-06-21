import { Inter } from "next/font/google";

import Nav from "@/components/UI/Nav/Nav";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agency.io",
  description: "The all in one vacation planning app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " dark:bg-[#111111]"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
