"use client";

import { auth } from "@/firebase/client.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider } from "next-themes";
import React, { createContext, useEffect, useState } from "react";
import { useCookie } from "react-use";

export const authContext = createContext<User | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cookies, setCookie, deleteCookie] = useCookie("isLoggedIn");

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
    <authContext.Provider value={user}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </authContext.Provider>
  );
};

export default Providers;
