import { Link, Router } from '@reach/router'
import * as React from 'react'
import { Header, Menu, MenuButton, ThemeToggle } from '../../../src'
import _404 from '../_404'
import ButtonDocs from '../Components/ButtonDocs'
import CardDocs from '../Components/CardDocs'
import ComponentLinks from '../ComponentLinks'
import ComponentsHome from '../Components/ComponentsHome'
import DesignElements from '../DesignElements'
import DialogDocs from '../Components/DialogDocs'
import FabDocs from '../Components/FabDocs'
import FormDocs from '../Components/FormDocs'
import Home from '../Home'
import IconDocs from '../Components/IconDocs'
import LinkDocs from '../Components/LinkDocs'
import PageLinks from '../PageLinks'
import PagesHome from '../Components/PagesHome'
import PaginationDocs from '../Components/PaginationDocs'
import PaperDocs from '../Components/PaperDocs'
import SignInPageDocs from '../Components/SignInPageDocs'
import SpinnerDocs from '../Components/SpinnerDocs'
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
        <p>
          <Link onClick={handleMenuClose} to="/pages">
            Pages
          </Link>
        </p>
        <PageLinks onClick={handleMenuClose} />
      </Menu>
      <main>
        <Router>
          <_404 default />
          <Home path="/" />
          <DesignElements path="design-elements" />
          <Typography path="typography" />
          <ComponentsHome path="components" />
          <ButtonDocs path="components/button" />
          <CardDocs path="components/card" />
          <DialogDocs path="components/dialog" />
          <FabDocs path="components/fab" />
          <FormDocs path="components/form" />
          <IconDocs path="components/icon" />
          <LinkDocs path="components/link" />
          <PaginationDocs path="components/pagination" />
          <PaperDocs path="components/paper" />
          <SpinnerDocs path="components/spinner" />
          <PagesHome path="pages" />
          <SignInPageDocs path="pages/sign-in" />
        </Router>
      </main>
    </React.StrictMode>
  )
}
