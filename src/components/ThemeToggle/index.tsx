import * as React from 'react'
import { Toggle } from '../..'
import getCssVar from '../../utils/getCssVar'
import './style.css'

// This is a local storage migration.
// Can be removed once propagated everywhere.
localStorage.removeItem('e-is-dark-theme-on')

const DARK = 'dark'
const LIGHT = 'light'
const localStorageKey = 'eri-theme'
const { classList } = document.documentElement
const storedThemeValue = localStorage.getItem(localStorageKey)
const prefersDarkTheme = Boolean(getCssVar('--e-prefers-dark-theme'))
const initialIsDarkThemeOn =
  storedThemeValue === DARK || (storedThemeValue !== LIGHT && prefersDarkTheme)

if (initialIsDarkThemeOn) classList.add('e-theme-dark')

export default function ThemeToggle() {
  const [isDarkThemeOn, setIsDarkThemeOn] = React.useState(initialIsDarkThemeOn)

  React.useEffect(() => {
    const storedThemeVal = localStorage.getItem(localStorageKey)
    if (!storedThemeVal) return
    const storedIsDarkThemeOn = storedThemeVal === DARK
    if (storedIsDarkThemeOn === isDarkThemeOn) return
    setIsDarkThemeOn(storedIsDarkThemeOn)
  }, [])

  const handleChange = () => {
    if (isDarkThemeOn) {
      classList.remove('e-theme-dark')
      localStorage.setItem(localStorageKey, LIGHT)
    } else {
      classList.add('e-theme-dark')
      localStorage.setItem(localStorageKey, DARK)
    }
    const metaThemeColor = document.querySelector('meta[name=theme-color]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', getCssVar('--e-color-theme-app'))
    }
    setIsDarkThemeOn(!isDarkThemeOn)
  }

  return (
    <Toggle
      checked={isDarkThemeOn}
      label="Toggle dark theme"
      onChange={handleChange}
    />
  )
}
