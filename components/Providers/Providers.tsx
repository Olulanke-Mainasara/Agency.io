"use client";

import { auth } from "@/firebase/client.config";
import { getUserLocation } from "@/lib/getUserLocation";
import { User, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider } from "next-themes";
import React, { createContext, useEffect, useState } from "react";
import { useCookie, useGeolocation } from "react-use";

export const authContext = createContext<User | null | undefined>(null);
export const locationContext = createContext<Promise<string> | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [cookieValue, setCookie, deleteCookie] = useCookie("isLoggedIn");
  const locationObject = useGeolocation();
  const userLocation = getUserLocation(locationObject);

  useEffect(() => {
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
    <locationContext.Provider value={userLocation}>
      <authContext.Provider value={user}>
        <ThemeProvider enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </authContext.Provider>
    </locationContext.Provider>
  );
};

export default Providers;
