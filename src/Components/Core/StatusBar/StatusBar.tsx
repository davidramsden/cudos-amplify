import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import Login from "./Login";
import ThemeSwitcher from "./ThemeSwitcher";
import { Logo } from "./StatusBar.styles";

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
            <Login />
            <ThemeSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StatusBar;
