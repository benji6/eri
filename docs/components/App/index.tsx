import { Link } from '@reach/router'
import * as React from 'react'
import { Header, Menu, MenuButton } from '../../../src'
import ComponentLinks from '../ComponentLinks'
import PageLinks from '../PageLinks'
import Router from '../Router'
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
        <Router />
      </main>
    </React.StrictMode>
  )
}
