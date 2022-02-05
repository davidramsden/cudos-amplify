import { createContext } from "react";
import { DefaultTheme } from "styled-components";

const ThemeUpdateContext = createContext((theme: DefaultTheme) =>
  console.error("Attempted to set theme outside of a ThemeUpdate.Provider")
);

export default ThemeUpdateContext;
