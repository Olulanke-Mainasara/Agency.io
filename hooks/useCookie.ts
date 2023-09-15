import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export default function useCookie(
  name: string,
  defaultValue?: string
): [
  string | null | undefined,
  (newValue: string, options?: Cookies.CookieAttributes | undefined) => void,
  () => void
] {
  const [value, setValue] = useState<string | null | undefined>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    if (defaultValue) {
      Cookies.set(name, defaultValue);
      return defaultValue;
    }
    return undefined;
  });

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes | undefined) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
