import "./style.css";
import * as React from "react";
import { Header, Main, Menu } from "../../../src";
import ComponentLinks from "../ComponentLinks";
import { Link } from "@reach/router";
import PageLinks from "../PageLinks";
import Router from "../Router";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClose = () => setIsMenuOpen(false);
  const handleMenuOpen = () => setIsMenuOpen(true);

  return (
    <React.StrictMode>
      <Header>
        <h1>
          <Link to="/">Eri</Link>
        </h1>
        <Menu.Button onClick={handleMenuOpen} />
      </Header>
      <Menu onClose={handleMenuClose} open={isMenuOpen}>
        <p>
          <Menu.Link onClick={handleMenuClose} to="/">
            Home
          </Menu.Link>
        </p>
        <p>
          <Menu.Link onClick={handleMenuClose} to="/design-elements">
            Design elements
          </Menu.Link>
        </p>
        <p>
          <Menu.Link onClick={handleMenuClose} to="/typography">
            Typography
          </Menu.Link>
        </p>
        <p>
          <Menu.Link onClick={handleMenuClose} to="/components">
            Components
          </Menu.Link>
        </p>
        <ComponentLinks onClick={handleMenuClose} />
        <p>
          <Menu.Link onClick={handleMenuClose} to="/pages">
            Pages
          </Menu.Link>
        </p>
        <PageLinks onClick={handleMenuClose} />
      </Menu>
      <Main>
        <Router />
      </Main>
    </React.StrictMode>
  );
}
