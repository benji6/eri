import { Link, Router } from '@reach/router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { getCssVar, Header, Menu, MenuButton, Toggle } from '../src'
import _404 from './components/_404'
import ComponentLinks from './components/ComponentLinks'
import Components from './components/Components'
import ButtonDocs from './components/Components/ButtonDocs'
import CardDocs from './components/Components/CardDocs'
import ComponentsHome from './components/Components/ComponentsHome'
import DialogDocs from './components/Components/DialogDocs'
import FabDocs from './components/Components/FabDocs'
import FormDocs from './components/Components/FormDocs'
import IconDocs from './components/Components/IconDocs'
import LinkDocs from './components/Components/LinkDocs'
import PaginationDocs from './components/Components/PaginationDocs'
import SpinnerDocs from './components/Components/SpinnerDocs'
import DesignElements from './components/DesignElements'
import Home from './components/Home'
import Typography from './components/Typography'
import './style.css'

const metaThemeColor = document.querySelector('meta[name=theme-color]')

function App() {
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
          <a href="/">Eri</a>
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

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
