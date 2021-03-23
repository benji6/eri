import "./style.css";
import * as React from "react";
import { Header, Main, Nav } from "../../../src";
import ComponentLinks from "../ComponentLinks";
import { Link } from "@reach/router";
import PageLinks from "../PageLinks";
import Router from "../Router";

export default function App() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const handleNavClose = () => setIsNavOpen(false);
  const handleNavOpen = () => setIsNavOpen(true);

  return (
    <React.StrictMode>
      <Header>
        <h1>
          <Link to="/">Eri</Link>
        </h1>
        <Nav.Button onClick={handleNavOpen} />
      </Header>
      <Nav onClose={handleNavClose} open={isNavOpen}>
        <Nav.List>
          <Nav.Link onClick={handleNavClose} to="/">
            Home
          </Nav.Link>
          <Nav.Link onClick={handleNavClose} to="/design-elements">
            Design elements
          </Nav.Link>
          <Nav.Link onClick={handleNavClose} to="/typography">
            Typography
          </Nav.Link>
          <Nav.Link onClick={handleNavClose} to="/css-utilities">
            CSS utilities
          </Nav.Link>
          <Nav.Link onClick={handleNavClose} to="/components">
            Components
          </Nav.Link>
          <ComponentLinks onClick={handleNavClose} />
          <Nav.Link onClick={handleNavClose} to="/pages">
            Pages
          </Nav.Link>
          <PageLinks onClick={handleNavClose} />
        </Nav.List>
      </Nav>
      <Main>
        <Router />
      </Main>
    </React.StrictMode>
  );
}
