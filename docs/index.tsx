import { Link, Router } from '@reach/router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { getCssVar, Header, Menu, MenuButton, Toggle } from '../src'
import _404 from './components/_404'
import Components from './components/Components'
import GettingStarted from './components/GettingStarted'
import Home from './components/Home'
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
          <Link onClick={handleMenuClose} to="/getting-started">
            Getting started
          </Link>
        </p>
        <p>
          <Link onClick={handleMenuClose} to="/components">
            Components
          </Link>
        </p>
      </Menu>
      <main>
        <Router>
          <_404 default />
          <Home path="/" />
          <Components path="components" />
          <GettingStarted path="getting-started" />
        </Router>
      </main>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
