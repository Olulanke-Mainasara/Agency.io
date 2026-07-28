"use client";

import React from "react";
import { auth } from "@/firebase/client.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { ThemeProvider } from "next-themes";

import { EmptyLocationData } from "@/types/Location";
import useCookie from "@/hooks/useCookie";
import { useLocation } from "@/hooks/useLocation";

export const authContext = React.createContext<User | null | undefined>(null);
const locationContext = React.createContext({
  location: { ...EmptyLocationData },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);
  const [value, updateCookie, deleteCookie] = useCookie("isLoggedIn");
  const location = useLocation();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        updateCookie("true");
        setUser(user);
      } else {
        updateCookie("false");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [updateCookie]);

  return (
    <authContext.Provider value={user}>
      <locationContext.Provider value={{ location }}>
        <ThemeProvider enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </locationContext.Provider>
    </authContext.Provider>
  );
};

export const useLocationContext = () => React.useContext(locationContext);
export default Providers;
