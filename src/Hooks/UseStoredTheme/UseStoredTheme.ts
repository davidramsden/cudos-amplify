import Dark from "@themes/Dark";
import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import LocalStorage from "@utils/LocalStorage";

const getStoredTheme = (): DefaultTheme => {
  let theme: DefaultTheme = LocalStorage.get("theme");
  return theme.name ? theme : Dark;
};

const useStoredTheme = () => {
  const storedTheme: DefaultTheme = getStoredTheme();
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    LocalStorage.set("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useStoredTheme;
