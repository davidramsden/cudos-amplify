import { IconType } from "react-icons";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    icon: IconType;
    bs: {
      bg: string;
      variant: string;
    };
    colors: {
      background: string;
      text: string;
    };
  }
}
