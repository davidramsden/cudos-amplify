import { useContext } from "react";
import { Button, ButtonGroup, OverlayTrigger } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import ThemeUpdateContext from "@contexts/ThemeUpdateContext";
import Themes from "@core/Theme/Themes";
import {
  ThemeSwitcherPopover,
  ThemeSwitcherPopoverBody,
} from "./ThemeSwitcher.styles";

const ThemeSwitcher = () => {
  const currentTheme = useContext(ThemeContext);
  const updateTheme = useContext(ThemeUpdateContext);

  const CurrentThemeIcon = currentTheme.icon;

  return (
    <OverlayTrigger
      trigger="focus"
      placement="bottom"
      overlay={
        <ThemeSwitcherPopover>
          <ThemeSwitcherPopoverBody>
            <ButtonGroup vertical>
              {Object.values(Themes).map((theme) => {
                const ThemeIcon = theme.icon;

                return (
                  <Button
                    key={theme.name}
                    variant={currentTheme.bs.variant}
                    disabled={currentTheme === theme}
                    onClick={() => updateTheme(theme)}
                  >
                    <ThemeIcon /> {theme.name}
                  </Button>
                );
              })}
            </ButtonGroup>
          </ThemeSwitcherPopoverBody>
        </ThemeSwitcherPopover>
      }
    >
      <Button variant={currentTheme.bs.variant}>
        <CurrentThemeIcon />
      </Button>
    </OverlayTrigger>
  );
};

export default ThemeSwitcher;
