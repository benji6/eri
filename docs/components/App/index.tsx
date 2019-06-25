import { Link, Router } from '@reach/router'
import * as React from 'react'
import { Header, Menu, MenuButton, ThemeToggle } from '../../../src'
import _404 from '../_404'
import ComponentLinks from '../ComponentLinks'
import ButtonDocs from '../Components/ButtonDocs'
import CardDocs from '../Components/CardDocs'
import ComponentsHome from '../Components/ComponentsHome'
import DialogDocs from '../Components/DialogDocs'
import FabDocs from '../Components/FabDocs'
import FormDocs from '../Components/FormDocs'
import IconDocs from '../Components/IconDocs'
import LinkDocs from '../Components/LinkDocs'
import PaginationDocs from '../Components/PaginationDocs'
import SpinnerDocs from '../Components/SpinnerDocs'
import DesignElements from '../DesignElements'
import Home from '../Home'
import Typography from '../Typography'
import './style.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const handleMenuClose = () => setIsMenuOpen(false)
  const handleMenuOpen = () => setIsMenuOpen(true)

  return (
    <React.StrictMode>
      <Header>
        <h1>
          <Link to="/">Eri</Link>
        </h1>
        <MenuButton onClick={handleMenuOpen} />
      </Header>
      <Menu onClose={handleMenuClose} open={isMenuOpen}>
        <ThemeToggle />
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
      </Menu>
      <main>
        <Router>
          <_404 default />
          <Home path="/" />
          <ComponentsHome path="components" />
          <ButtonDocs path="components/button" />
          <CardDocs path="components/card" />
          <DialogDocs path="components/dialog" />
          <FabDocs path="components/fab" />
          <FormDocs path="components/form" />
          <IconDocs path="components/icon" />
          <LinkDocs path="components/link" />
          <PaginationDocs path="components/pagination" />
          <SpinnerDocs path="components/spinner" />
          <DesignElements path="design-elements" />
          <Typography path="typography" />
        </Router>
      </main>
    </React.StrictMode>
  )
}
