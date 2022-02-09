import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import ThemeUpdateContext from "@contexts/ThemeUpdateContext";
import useStoredTheme from "@hooks/UseStoredTheme";
import GlobalTheme from "./GlobalTheme";

const Theme = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useStoredTheme();

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
