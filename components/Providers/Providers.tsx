"use client";

import { auth } from "@/firebase/client.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider } from "next-themes";
import React from "react";
import { useCookie } from "react-use/";

export const authContext = React.createContext<User | null | undefined>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);
  const [cookieValue, setCookie, deleteCookie] = useCookie("isLoggedIn");

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCookie("true");
        setUser(user);
      } else {
        setCookie("false");
        setUser(null);
      }
    });
  }, [setCookie]);

  return (
    <authContext.Provider value={user}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </authContext.Provider>
  );
};

export default Providers;
