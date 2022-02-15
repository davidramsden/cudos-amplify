import { Popover } from "react-bootstrap";
import styled from "styled-components";

export const ThemeSwitcherPopover = styled(Popover)`
  color: ${(props: any) => props.theme.colors.text};
  background-color: ${(props: any) => props.theme.colors.background};
`;

export const ThemeSwitcherPopoverBody = styled(Popover.Body)`
  color: ${(props: any) => props.theme.colors.text};
  background-color: ${(props: any) => props.theme.colors.background};
  margin: 0px;
  padding: 0px;
`;
