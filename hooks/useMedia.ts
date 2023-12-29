import { useEffect, useState } from "react";

const useMedia = (query: string) => {
  const isClient = typeof window === "object";

  const [matches, setMatches] = useState(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", updateMatches);
    updateMatches(); // Initial check

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query, isClient]);

  return matches;
};

export default useMedia;
