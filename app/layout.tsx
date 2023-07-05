import { Inter } from "next/font/google";

import Nav from "@/components/UI/Nav/Nav";

import Providers from "../components/Providers/NextThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " dark:bg-background"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
