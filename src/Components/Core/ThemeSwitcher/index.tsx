import { useContext } from "react";
import { Button, ButtonGroup, OverlayTrigger } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import ThemeUpdateContext from "../../../Contexts/ThemeUpdateContext";
import Themes from "../../../Styles/Themes";
import { ThemeSwitcherPopover, ThemeSwitcherPopoverBody } from "./styles";

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
