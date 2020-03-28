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
          <Link onClick={handleMenuClose} to="/">
            Home
          </Link>
        </p>
        <p>
          <Link onClick={handleMenuClose} to="/design-elements">
            Design elements
          </Link>
        </p>
        <p>
          <Link onClick={handleMenuClose} to="/typography">
            Typography
          </Link>
        </p>
        <p>
          <Link onClick={handleMenuClose} to="/components">
            Components
          </Link>
        </p>
        <ComponentLinks onClick={handleMenuClose} />
        <p>
          <Link onClick={handleMenuClose} to="/pages">
            Pages
          </Link>
        </p>
        <PageLinks onClick={handleMenuClose} />
      </Menu>
      <Main>
        <Router />
      </Main>
    </React.StrictMode>
  );
}
