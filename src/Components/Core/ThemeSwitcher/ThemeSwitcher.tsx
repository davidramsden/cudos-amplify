import { useContext } from "react";
import { Button, ButtonGroup, OverlayTrigger } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import ThemeUpdateContext from "@contexts/ThemeUpdateContext";
import Themes from "@themes/index";
import {
  ThemeSwitcherPopover,
  ThemeSwitcherPopoverBody,
} from "./ThemeSwitcher.styles";
import Icon from "../Icon";

const ThemeSwitcher = () => {
  const currentTheme = useContext(ThemeContext);
  const updateTheme = useContext(ThemeUpdateContext);

  return (
    <OverlayTrigger
      trigger="focus"
      placement="bottom"
      overlay={
        <ThemeSwitcherPopover>
          <ThemeSwitcherPopoverBody>
            <ButtonGroup vertical>
              {Object.values(Themes).map((theme) => {
                return (
                  <Button
                    key={theme.name}
                    variant={currentTheme.bs.variant}
                    disabled={currentTheme === theme}
                    onClick={() => updateTheme(theme)}
                  >
                    <Icon name={theme.icon} /> {theme.name}
                  </Button>
                );
              })}
            </ButtonGroup>
          </ThemeSwitcherPopoverBody>
        </ThemeSwitcherPopover>
      }
    >
      <Button variant={currentTheme.bs.variant}>
        <Icon name={currentTheme.icon} />
      </Button>
    </OverlayTrigger>
  );
};

export default ThemeSwitcher;
