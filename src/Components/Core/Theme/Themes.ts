import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
  name: "Dark",
  icon: MdOutlineDarkMode,
  bs: {
    bg: "dark",
    variant: "dark",
  },
  colors: {
    background: "#333",
    text: "#fff",
  },
};

export const light: DefaultTheme = {
  name: "Light",
  icon: MdOutlineLightMode,
  bs: {
    bg: "light",
    variant: "light",
  },
  colors: {
    background: "#fff#",
    text: "#333",
  },
};

const Themes = {
  dark: dark,
  light: light,
};

export default Themes;
