import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import ThemeSwitcher from "../ThemeSwitcher";
import { Logo } from "./styles";

const StatusBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <Navbar bg={theme.bs.bg} expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <ThemeSwitcher />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StatusBar;
