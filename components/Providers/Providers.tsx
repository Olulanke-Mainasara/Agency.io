"use client";

import React from "react";
import { auth } from "@/firebase/client.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { ThemeProvider } from "next-themes";

import useCookie from "@/hooks/useCookie";

export const authContext = React.createContext<User | null | undefined>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);
  const [value, updateCookie, deleteCookie] = useCookie("isLoggedIn");

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateCookie("true");
        setUser(user);
      } else {
        updateCookie("false");
        setUser(null);
      }
    });
  }, [updateCookie]);

  return (
    <authContext.Provider value={user}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </authContext.Provider>
  );
};

export default Providers;
