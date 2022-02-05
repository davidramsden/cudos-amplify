import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeUpdateContext from "../../../Contexts/ThemeUpdateContext";
import GlobalTheme from "../../../Styles/Global";
import Themes from "../../../Styles/Themes";

const Theme = ({ children }) => {
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
