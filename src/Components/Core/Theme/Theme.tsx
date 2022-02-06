import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeUpdateContext from "@contexts/ThemeUpdateContext";
import GlobalTheme from "./GlobalTheme";
import Themes from "./Themes";

const Theme = ({ children }: { children: JSX.Element }) => {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeUpdateContext.Provider value={setCurrentTheme}>
        <GlobalTheme />
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
