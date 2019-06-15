import { Link, Router } from '@reach/router'
import * as React from 'react'
import { getCssVar, Header, Menu, MenuButton, Toggle } from '../../../src'
import _404 from '../_404'
import ComponentLinks from '../ComponentLinks'
import Components from '../Components'
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

const metaThemeColor = document.querySelector('meta[name=theme-color]')

export default function App() {
  const [isLightThemeOn, setIsLightThemeOn] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const handleMenuClose = () => setIsMenuOpen(false)
  const handleMenuOpen = () => setIsMenuOpen(true)

  const toggleTheme = () => {
    if (isLightThemeOn) document.documentElement.classList.add('e-theme-dark')
    else document.documentElement.classList.remove('e-theme-dark')

    metaThemeColor.setAttribute('content', getCssVar('--e-color-theme-app'))
    setIsLightThemeOn(!isLightThemeOn)
  }

  return (
    <React.StrictMode>
      <Header>
        <h1>
          <Link to="/">Eri</Link>
        </h1>
        <MenuButton onClick={handleMenuOpen} />
      </Header>
      <Menu onClose={handleMenuClose} open={isMenuOpen}>
        <Toggle
          checked={isLightThemeOn}
          label={isLightThemeOn ? 'Light theme on' : 'Dark theme on'}
          onChange={toggleTheme}
        />
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
          <Components path="components">
            <_404 default />
            <ComponentsHome path="/" />
            <ButtonDocs path="button" />
            <CardDocs path="card" />
            <DialogDocs path="dialog" />
            <FabDocs path="fab" />
            <FormDocs path="form" />
            <IconDocs path="icon" />
            <LinkDocs path="link" />
            <PaginationDocs path="pagination" />
            <SpinnerDocs path="spinner" />
          </Components>
          <DesignElements path="design-elements" />
          <Typography path="typography" />
        </Router>
      </main>
    </React.StrictMode>
  )
}
